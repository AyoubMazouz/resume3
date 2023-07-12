<script>
  import Carousel from "../components/Carousel.svelte";
  import { COLORS } from "../constants";

  import Smodel from "../stores/Smodel";

  function handleGoBack() {
    Smodel.setProject(null);
  }
</script>

<div class="lg:px-10 px-4 flex h-[100vh]">
  <div class="w-7/12 z-10 flex justify-center items-center p-6 pr-12">
    <!-- Carousel -->
    <Carousel />
  </div>
  <!-- Details -->
  <div class="w-5/12 px-6 py-24 h-full z-10 relative overflow-hidden">
    <!-- Overlay -->
    <div class="absolute top-0 bottom-0 left-0 right-0 bg-light/30 blur-xl -z-10" />
    <!-- Close Button -->
    <div class="flex flex-col">
      <button class="ml-auto" on:click={handleGoBack}>Go Back</button>
      <div class="text-3xl font-semibold mb-1">
        {$Smodel.name}
      </div>
      <div class="flex flex-wrap gap-x-3 items-center text-sm">
        {#each $Smodel.technologies as tech, index (tech)}
          <div class="font-semibold text-{COLORS[index % 3]}">
            {tech}
          </div>
        {/each}
      </div>
      <div class="indent-4 mt-36">
        {@html $Smodel.description}
      </div>
      <div class="flex items-center gap-x-3">
        <a href={$Smodel.demoURL} target="_blank">Demo</a>
        <a href={$Smodel.repoURL} target="_blank">Source Code</a>
      </div>
    </div>
  </div>
</div>
