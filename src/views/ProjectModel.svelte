<script>
  import Carousel from "../components/Carousel.svelte";
  import { COLORS } from "../constants";

  import Smodel from "../stores/Smodel";

  function handleGoBack() {
    Smodel.setProject(null);
  }
  function handleNext() {
    Smodel.setProject(null);
  }
  function handlePrev() {
    Smodel.setProject(null);
  }
</script>

<div class="lg:px-10 px-4 flex h-[100vh]">
  <div class="w-7/12 z-10 flex justify-center items-center p-6 pr-12">
    <!-- Carousel -->
    <Carousel />
  </div>
  <!-- Details -->
  <div class="w-5/12 px-6 py-16 h-full z-10 relative overflow-hidden">
    <!-- Overlay -->
    <div class="absolute top-0 bottom-0 left-0 right-0 bg-dark/20 -z-10" />
    <!-- Close Button -->
    <div class="flex flex-col">
      <div class="flex justify-between mb-16">
        <div class="flex gap-x-4">
          <button
            class="hover:underline hover:text-secondary transition-all duration-200"
            on:click={handlePrev}>Previous</button
          >
          <button
            class="hover:underline hover:text-secondary transition-all duration-200"
            on:click={handleNext}>Next</button
          >
        </div>
        <button
          class="hover:underline hover:text-secondary transition-all duration-200"
          on:click={handleGoBack}>Go Back</button
        >
      </div>
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
      <div class="flex items-center gap-x-4 mt-16">
        <a
          class="hover:underline hover:text-secondary transition-all duration-200"
          href={$Smodel.demoURL}
          target="_blank">Demo</a
        >
        <a
          class="hover:underline hover:text-secondary transition-all duration-200"
          href={$Smodel.repoURL}
          target="_blank">Source Code</a
        >
      </div>
    </div>
  </div>
</div>
