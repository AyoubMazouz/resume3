<script>
  import Icon from "@iconify/svelte";

  export let id = "";
  export let max = 0;
  export let min = 0;
  export let step = 1;
  export let value = 0;
</script>

<div class="relative w-full h-6 bg-accent/25 border border-accent rounded-sm">
  <div
    style="width: {Math.floor((value / max) * 100)}%;"
    class="bg-accent absolute top-0 left-0 right-0 bottom-0"
  />
  <Icon
    icon="fluent-mdl2:slider-thumb"
    width="22px"
    style="left: {Math.floor((value / max) * 100)}%;"
    class="absolute top-[50%] translate-y-[-50%] translate-x-[-50%]"
  />
  <input {id} type="range" {min} {max} {step} bind:value class="opacity-0 w-full" />
</div>
