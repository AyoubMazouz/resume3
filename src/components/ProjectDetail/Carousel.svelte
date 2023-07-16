<script>
  import Icon from "@iconify/svelte";
  import projectStore from "../../stores/projectStore";
  let curr = -1;
  function handlePrev() {
    if (curr === -1) return;
    curr -= 1;
  }
  function handleNext() {
    if (curr === $projectStore.numOfImgs - 1) return;
    curr += 1;
  }
  function handleClick(id) {
    curr = id;
  }
</script>

<div class="relative rounded shadow-lg overflow-hidden aspect-video">
  <!-- Prev -->
  <button
    on:click={handlePrev}
    class="absolute top-[50%] left-0 translate-y-[-50%] hover:scale-120 hover:opacity-75 opacity-50 transition-all duration-300 z-20"
  >
    <Icon icon="teenyicons:left-outline" width="56px" class="text-accent" />
  </button>
  <!-- Next -->
  <button
    on:click={handleNext}
    class="absolute top-[50%] right-0 translate-y-[-50%] hover:scale-120 hover:opacity-75 opacity-50 transition-all duration-200 z-20"
  >
    <Icon icon="teenyicons:right-outline" width="56px" class="text-accent" />
  </button>
  {#if curr === -1}
    <div style="padding-bottom: 56.25%; max-width: 100%; position: relative;">
      <iframe
        title={$projectStore.name}
        src="https://www.youtube.com/embed/{$projectStore.videoId}?autoplay=1&mute=1"
        width="800"
        height="450"
        style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"
        frameborder="0"
      />
    </div>
  {:else}
    <img
      src="/assets/{$projectStore.name.toLowerCase().replaceAll(' ', '-')}/{curr}-1920.jpeg"
      alt={$projectStore.name}
    />
  {/if}
</div>

<div class="rounded-sm shadow-lg overflow-hidden flex flex-wrap justify-center gap-2 mt-2">
  <button
    on:click={() => handleClick(-1)}
    class="aspect-square h-8 md:h-12 rounded-sm overflow-hidden {curr === -1
      ? 'border-2 border-accent'
      : 'filter grayscale'}"
  >
    <img
      class="object-cover w-full h-full hover:scale-125 transition-all duration-200 hover:opacity-50"
      src={"https://img.youtube.com/vi/" + $projectStore.videoId + "/0.jpg"}
      alt={$projectStore.name}
    />
  </button>
  {#each new Array($projectStore.numOfImgs).fill(null).map((_, i) => i) as index}
    <button
      on:click={() => handleClick(index)}
      class="aspect-square h-8 md:h-12 rounded-sm overflow-hidden {index === curr
        ? 'border-2 border-accent'
        : 'filter grayscale'}"
    >
      <img
        class="object-cover w-full h-full hover:scale-125 transition-all duration-200 hover:opacity-50"
        src="/assets/{$projectStore.name.toLowerCase().replaceAll(' ', '-')}/{index}-1920.jpeg"
        alt={$projectStore.name}
      />
    </button>
  {/each}
</div>
