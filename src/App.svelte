<script>
  import Background from "./components/Background.svelte";
  import Smodel from "./stores/Smodel";
  import Home from "./views/Home.svelte";
  import ProjectModel from "./views/ProjectModel.svelte";
</script>

<div class="font-poppins flex justify-center text-light bg-dark">
  <Background />
  <div class="w-full h-full max-w-[1400px]">
    {#if $Smodel}
      <ProjectModel />
    {:else}
      <Home />
    {/if}
  </div>
</div>
