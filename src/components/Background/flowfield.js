// Constants
const BG_COLOR = "#000";

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

class Effect {
  constructor(canvas, ctx, options) {
    /** @type {CanvasRenderingContext2D} */
    this.canvas = canvas;
    this.ctx = ctx;
    this.w = canvas.width;
    this.h = canvas.height;
    this.numOfParticles = options.numOfParticles;
    this.cellSize = options.cellSize;
    this.curve = options.curve;
    this.zoom = options.zoom;
    this.speed = options.speed;
    this.lifeSpan = options.lifeSpan;
    this.speedBoost = 1;
    this.particles = [];
    this.grid = [];
    this.rows;
    this.cols;
    this.init();
  }

  initGrid() {
    this.grid = [];
    this.rows = Math.floor(this.w / this.cellSize);
    this.cols = Math.floor(this.h / this.cellSize);
    for (let y = 0; y <= this.cols; y++) {
      const temp = [];
      for (let x = 0; x <= this.rows; x++) {
        temp[x] = (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
      }
      this.grid.push(temp);
    }
  }
  initParticles() {
    this.particles = [];
    for (let i = 0; i <= this.numOfParticles; i++) {
      this.particles.push(new Particle(this));
    }
  }
  init() {
    this.initGrid();
    this.initParticles();
  }

  modify(obj) {
    let reInitParticles = this.numOfParticles !== obj.numOfParticles;
    let reInitGrid =
      this.zoom !== obj.zoom || this.curve !== obj.curve || this.cellSize !== obj.cellSize;

    this.zoom = obj.zoom;
    this.curve = obj.curve;
    this.speed = obj.speed;
    this.cellSize = obj.cellSize;
    this.lifeSpan = obj.lifeSpan;
    this.numOfParticles = obj.numOfParticles;

    if (reInitGrid) {
      this.initGrid();
      this.speedBoost = 10;
    }
    if (reInitParticles) this.initParticles();
  }

  render() {
    this.speedBoost = this.speedBoost <= 1 ? 1 : this.speedBoost - this.speedBoost / 12;
    this.ctx.fillStyle = BG_COLOR;
    this.ctx.fillRect(0, 0, this.w, this.h);
    for (const particle of this.particles) {
      particle.update(this.ctx);
      particle.draw(this.ctx);
    }
  }
}

class Particle {
  constructor(effect) {
    this.effect = effect;
    this.x = randomInt(0, this.effect.w);
    this.y = randomInt(0, this.effect.h);
    this.history = [{ x: this.x, y: this.y }];
    this.cursor = 0;
    this.w = 10;
    this.h = 10;
    this.angle;
    this.lifeSpan = randomInt(5, effect.lifeSpan);
    this.speedModifier = randomInt(1, effect.speed);
    this.speedX;
    this.speedY;
    this.hRange = [343, 259];
    this.color = [randomInt(this.hRange[0], this.hRange[1]), 74, 38];
    this.colorDir = 1;
  }

  update() {
    if (this.x >= this.effect.w || this.x <= 1 || this.y <= 1 || this.y >= this.effect.h)
      this.reset();
    else if (this.lifeSpan > this.history.length) {
      const col = Math.floor(this.y / this.effect.cellSize);
      const row = Math.floor(this.x / this.effect.cellSize);

      this.angle = this.effect.grid[col][row];
      this.speedX = Math.sin(this.angle);
      this.speedY = Math.cos(this.angle);

      this.x += this.speedX * this.speedModifier * this.effect.speedBoost;
      this.y += this.speedY * this.speedModifier * this.effect.speedBoost;

      this.history.push({ x: Math.floor(this.x), y: Math.floor(this.y) });
    } else if (this.cursor < this.history.length - 1) {
      this.cursor++;
    } else {
      this.reset();
    }
  }

  draw(ctx) {
    this.color[0] += this.colorDir * randomInt(1, 3);
    if (this.hRange[0] >= this.color[0] || this.hRange[1] >= this.color[0])
      this.colorDir = -this.colorDir;
    const [h, s, l] = this.color;
    ctx.strokeStyle = `hsl(${h}, ${s}%,${l}%)`;
    ctx.beginPath();
    if (this.history.length > 1)
      ctx.moveTo(this.history[this.cursor].x, this.history[this.cursor].y);
    for (let i = this.cursor; i < this.history.length; i++) {
      const x = this.history[i].x;
      const y = this.history[i].y;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  reset() {
    const newInstance = new Particle(this.effect);
    Object.assign(this, newInstance);
  }
}

export default Effect;
