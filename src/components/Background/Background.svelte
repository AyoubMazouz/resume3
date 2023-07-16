<script>
  import { onMount } from "svelte";
  import Effect from "./flowfield";
  import projectStore from "../../stores/projectStore";
  import settingsStore from "../../stores/settingsStore";
  import { EFFECT_DEFAULT_OPTIONS } from "../../constants";

  let canvas;
  let effect;
  $: [width, height] = [window.innerWidth, window.innerHeight];
  $: if (effect) effect.modify($settingsStore);

  onMount(() => {
    /** @type {CanvasRenderingContext2D} */
    const ct = canvas.getContext("2d");
    if (canvas) {
      effect = new Effect(canvas, ct, EFFECT_DEFAULT_OPTIONS);
      const animate = () => {
        console.time("st");
        effect.render();
        console.timeEnd("st");
        requestAnimationFrame(animate);
      };
      animate();
    }
  });
</script>

<canvas class="{$projectStore && 'blur'} fixed top-0 left-0" bind:this={canvas} {width} {height} />
