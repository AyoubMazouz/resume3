<script>
  import Carousel from "../components/Carousel.svelte";
  import ProjectModelSidePanel from "../components/ProjectModelSidePanel.svelte";

  import projectStore from "../stores/projectStore";
</script>

<div class="lg:px-10 px-4 gap-4 grid grid-cols-3 h-[100vh] pt-12 pb-24">
  <div class="lg:hidden col-span-full z-10">
    <ProjectModelSidePanel />
  </div>
  <div class="col-span-full lg:col-span-2 z-10">
    <Carousel />
  </div>
  <div class="hidden lg:block col-span-1 z-10">
    <ProjectModelSidePanel />
  </div>
  <!-- Bottom -->
  <div class="col-span-full h-full z-10">
    <div class="space-y-2">
      {@html $projectStore.description}
    </div>
  </div>
</div>
