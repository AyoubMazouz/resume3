<script>
  import Carousel from "./Carousel.svelte";
  import ProjectModelSidePanel from "./ProjectDetailSidePanel.svelte";

  import projectStore from "../../stores/projectStore";
  import { blur, fade } from "svelte/transition";
  import { quintInOut } from "svelte/easing";
</script>

<div
  in:blur={{ duration: 300, easing: quintInOut, amount: 10 }}
  class="lg:px-10 px-4 gap-4 grid grid-cols-3 h-[100vh] pt-12 pb-24"
>
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
      {@html $projectStore?.description}
    </div>
  </div>
</div>
