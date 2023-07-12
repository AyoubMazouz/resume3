<script>
  import { onMount } from "svelte";
  import Effect from "./flowfield";

  let canvas;
  $: [width, height] = [window.innerWidth, window.innerHeight];

  onMount(() => {
    /** @type {CanvasRenderingContext2D} */
    const ct = canvas.getContext("2d");
    if (canvas) {
      const effect = new Effect(canvas, ct, 500);
      const animate = () => {
        effect.render();
        requestAnimationFrame(animate);
      };
      animate();
    }
  });
</script>

<canvas class="blur-[2px] fixed top-0 left-0" bind:this={canvas} {width} {height} />
