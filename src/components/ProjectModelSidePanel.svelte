<script>
  import { projects } from "../data";
  import projectStore from "../stores/projectStore";
  function handleGoBack() {
    projectStore.setProject(null);
  }
  function handleNext() {
    projectStore.setNext($projectStore.id);
  }
  function handlePrev() {
    projectStore.setPrev($projectStore.id);
  }
</script>

<div class="max-h-[501px] h-full flex flex-col lg:pt-4 lg:pb-16">
  <div class="flex justify-between mb-2 lg:mb-8">
    <button class="link" on:click={handleGoBack}>Go Back</button>
    <div class="flex gap-x-4">
      <button disabled={$projectStore.id === 0} class="link" on:click={handlePrev}>Previous</button>
      <button disabled={$projectStore.id === projects.length - 1} class="link" on:click={handleNext}
        >Next</button
      >
    </div>
  </div>
  <div class="text-3xl font-semibold mb-4">
    {$projectStore.name}
  </div>
  <div class="flex flex-wrap lg:flex-col gap-x-4 text-sm">
    {#each $projectStore.technologies as tech, index (tech)}
      <div class="font-semibold">
        {tech}
      </div>
    {/each}
  </div>
  <div class="flex items-center gap-x-4 lg:mt-auto mt-6">
    {#if !!$projectStore.demoURL}
      <button class="link">
        <a href={$projectStore.demoURL} target="_blank">Demo</a>
      </button>
    {:else}
      <button disabled={true} class="link">Demo</button>
    {/if}
    {#if !!$projectStore.demoURL}
      <button class="link">
        <a class="link" href={$projectStore.repoURL} target="_blank">Source Code</a>
      </button>
    {:else}
      <button disabled={true} class="link">Source Code</button>
    {/if}
  </div>
</div>
