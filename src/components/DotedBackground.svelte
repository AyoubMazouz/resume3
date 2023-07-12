<script>
  import { onMount } from "svelte";
  import { CELL_SIZE, DOTE_SIZE, DOTS_COLOR } from "../constants";

  let canvas;
  $: width = window.innerWidth;
  $: height = window.innerHeight;

  const drawDots = (ct) => {
    const x = Math.floor(width / CELL_SIZE);
    const y = Math.floor(height / CELL_SIZE);

    for (let i = 1; i < x; i++) {
      for (let j = 1; j <= y; j++) {
        ct.fillStyle = DOTS_COLOR;
        ct.fillRect(CELL_SIZE * i, CELL_SIZE * j, DOTE_SIZE, DOTE_SIZE);
      }
    }
  };

  onMount(() => {
    /** @type {CanvasRenderingContext2D} */
    const ct = canvas.getContext("2d");
    ct.fillStyle = "#1C1340";
    ct.fillRect(0, 0, canvas.width, canvas.height);
    drawDots(ct);
  });
</script>

<canvas class="fixed left-0 top-0 opacity-[10%]" bind:this={canvas} {width} {height} />
