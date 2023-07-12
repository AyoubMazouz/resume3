<script>
  import { onMount } from "svelte";
  import {
    BG_COLOR,
    CIRCLES_CANVAS_H,
    CIRCLES_CANVAS_W,
    CIRCLES_COLORS,
    CIRCLES_COUNT,
    CIRCLE_MAX_RADIUS,
    CIRCLE_MAX_SPEED,
    CIRCLE_MIN_RADIUS,
    CIRCLE_OPACITY,
  } from "../constants";

  let canvas;
  let circles = [];

  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const cleanUp = (ct) => {
    ct.fillStyle = BG_COLOR;
    ct.fillRect(0, 0, canvas?.width, canvas?.height);
  };

  const generateCircles = () => {
    for (let i = 0; i < CIRCLES_COUNT; i++) {
      const radius = randomInt(CIRCLE_MIN_RADIUS, CIRCLE_MAX_RADIUS);
      circles[i] = {
        id: i,
        radius,
        x: randomInt(radius, canvas.width - radius),
        y: randomInt(radius, canvas.height - radius),
        color: CIRCLES_COLORS[Math.floor(i % CIRCLES_COLORS.length)],
        speedX: randomInt(-CIRCLE_MAX_SPEED, CIRCLE_MAX_SPEED),
        speedY: randomInt(-CIRCLE_MAX_SPEED, CIRCLE_MAX_SPEED),
      };
    }
  };

  const drawCircles = (ct) => {
    ct.globalAlpha = CIRCLE_OPACITY;
    circles.forEach((circle) => {
      ct.beginPath();
      ct.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
      ct.fillStyle = circle.color;
      ct.fill();
      ct.closePath();
    });
    ct.globalAlpha = 1;
  };

  const animateCircle = () => {
    circles = circles.map((circle) => {
      let x,
        y,
        speedX = circle.speedX,
        speedY = circle.speedY;
      if (circle.x + circle.radius >= canvas.width) {
        speedX = randomInt(0, CIRCLE_MAX_SPEED) * -1;
      } else if (circle.x - circle.radius <= 0) {
        speedX = randomInt(0, CIRCLE_MAX_SPEED);
      }
      if (circle.y + circle.radius >= canvas.height) {
        speedY = randomInt(0, CIRCLE_MAX_SPEED) * -1;
      } else if (circle.y - circle.radius <= 0) {
        speedY = randomInt(0, CIRCLE_MAX_SPEED);
      }
      x = circle.x + circle.speedX;
      y = circle.y + circle.speedY;

      return { ...circle, x, y, speedX, speedY };
    });
  };

  onMount(() => {
    /** @type {CanvasRenderingContext2D} */
    const ct = canvas.getContext("2d");
    generateCircles();

    const animate = () => {
      if (canvas) {
        cleanUp(ct);
        animateCircle();
        drawCircles(ct);
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  });
</script>

<canvas
  class="blur-[96px] fixed top-0 left-0"
  bind:this={canvas}
  width={CIRCLES_CANVAS_W}
  height={CIRCLES_CANVAS_H}
/>
