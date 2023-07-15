<script>
  import Background from "./components/Background.svelte";
  import projectStore from "./stores/projectStore";
  import Home from "./views/Home/Home.svelte";
  import ProjectModel from "./views/ProjectModel.svelte";
</script>

<div class="flex justify-center text-light bg-dark">
  <Background />
  <div class="w-full h-full max-w-[1400px]">
    {#if $projectStore}
      <ProjectModel />
    {:else}
      <Home />
    {/if}
  </div>
</div>
