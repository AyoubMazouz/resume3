<script>
  import Background from "./components/Background/Background.svelte";
  import Footer from "./components/Footer.svelte";
  import projectStore from "./stores/projectStore";
  import Home from "./components/Home/Home.svelte";
  import ProjectModel from "./components/ProjectDetail/ProjectDetails.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  onMount(() => {
    window.alert("This website is still on the work! 🔌🔌🔌");
  });
</script>

<div class="relative flex justify-center text-light bg-dark">
  <Background />
  <div class="w-full h-full max-w-[1400px]">
    {#if $projectStore}
      <ProjectModel />
    {:else}
      <Home />
    {/if}
  </div>
  <Footer />
</div>
