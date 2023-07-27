<script>
  import { projects } from "../data";
  import projectStore from "../stores/projectStore";

  function handleProjectClick(name) {
    projectStore.setProject(name);
  }
</script>

<div class="gap-y-12 flex flex-col justify-center items-center">
  {#each projects as project (project.name)}
    <button
      on:click={() => handleProjectClick(project.name)}
      class="rounded-sm shadow-lg overflow-hidden border border-dark transition-all duration-200 hover:scale-105 cursor-pointer relative group w-full h-full"
    >
      <div class="w-full h-full">
        <img
          src="/assets/{project.name.toLowerCase().replaceAll(' ', '-')}/0-1920.jpeg"
          alt={project.name}
          class="object-cover w-full h-full"
        />
      </div>
      <div
        class="absolute bottom-[-100%] group-hover:bottom-0 top-[50%] left-0 right-0 opacity-0 group-hover:opacity-100 p-4 bg-gradient-to-t from-dark/80 to-transparent flex flex-col justify-end transition-all duration-200"
      >
        <h2 class="text-xl text-light text-left font-semibold mb-2">{project.name}</h2>
        <div class="flex gap-3 flex-wrap text-sm">
          {#each project.technologies as tech (tech)}
            <div class="font-semibold">
              {tech}
            </div>
          {/each}
        </div>
      </div>
    </button>
  {/each}
</div>
