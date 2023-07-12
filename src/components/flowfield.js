// Constants
const FG_COLOR = "#fff";
const BG_COLOR = "#000";

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

class Effect {
  constructor(canvas, ctx, particlesNum = 70) {
    /** @type {CanvasRenderingContext2D} */
    this.canvas = canvas;
    this.ctx = ctx;
    this.w = canvas.width;
    this.h = canvas.height;
    this.particlesNum = particlesNum;
    this.cellSize = 20;
    this.curve = 1;
    this.zoom = 0.15;
    this.particles = [];
    this.grid = [];
    this.rows;
    this.cols;
    this.init();
  }

  init() {
    this.rows = Math.floor(this.w / this.cellSize);
    this.cols = Math.floor(this.h / this.cellSize);

    for (let y = 0; y <= this.cols; y++) {
      const temp = [];
      for (let x = 0; x <= this.rows; x++) {
        temp[x] = (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
      }
      this.grid.push(temp);
    }

    for (let i = 0; i <= this.particlesNum; i++) {
      this.particles.push(new Particle(this));
    }
  }

  render() {
    this.ctx.fillStyle = BG_COLOR;
    this.ctx.fillRect(0, 0, this.w, this.h);
    for (const particle of this.particles) {
      particle.update(this.ctx);
      particle.draw(this.ctx);
    }
  }

  resize(w, h) {
    this.canvas.width = w;
    this.canvas.height = h;
    this.w = w;
    this.h = h;
    this.grid = [];
    this.particles = [];
    this.init();
  }
}

class Particle {
  constructor(effect) {
    this.effect = effect;
    this.x = Math.floor(Math.random() * this.effect.w);
    this.y = Math.floor(Math.random() * this.effect.h);
    this.history = [{ x: this.x, y: this.y }];
    this.w = 10;
    this.h = 10;
    this.angle = 0;
    this.lifeSpan = Math.floor(Math.random() * 50);
    this.speedModifier = Math.floor(Math.random() * 10);
    this.speedX;
    this.speedY;
    this.hRange = [343, 240];
    this.color = [randomInt(this.hRange[0], this.hRange[1]), 80, 61];
    this.colorDir = 1;
  }

  update() {
    if (this.x >= this.effect.w || this.x <= 1 || this.y <= 1 || this.y >= this.effect.h)
      this.reset();
    else if (this.lifeSpan >= 1) {
      const col = Math.floor(this.y / this.effect.cellSize);
      const row = Math.floor(this.x / this.effect.cellSize);

      this.angle = this.effect.grid[col][row];
      this.speedX = Math.sin(this.angle);
      this.speedY = Math.cos(this.angle);

      this.x += this.speedX * this.speedModifier;
      this.y += this.speedY * this.speedModifier;

      this.history.push({ x: this.x, y: this.y });
    } else if (this.history.length >= 1) {
      this.history.shift();
    } else this.reset();
  }

  draw(ctx) {
    this.color[0] += this.colorDir * randomInt(1, 5);
    if (this.hRange[0] >= this.color[0] || this.hRange[1] >= this.color[0])
      this.colorDir = -this.colorDir;
    const [h, s, l] = this.color;
    ctx.strokeStyle = `hsl(${h}, ${s}%,${l}%)`;
    ctx.beginPath();
    if (this.history.length > 0) ctx.moveTo(this.history[0].x, this.history[0].y);
    for (const pos of this.history) {
      ctx.lineTo(pos.x, pos.y);
    }
    ctx.stroke();
  }

  reset() {
    this.x = Math.floor(Math.random() * this.effect.w);
    this.y = Math.floor(Math.random() * this.effect.h);
    this.history = [{ x: this.x, y: this.y }];
  }
}

export default Effect;
