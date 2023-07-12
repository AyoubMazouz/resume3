<script>
  import { COLORS } from "../constants";
  import { projects } from "../data";
  import Smodel from "../stores/Smodel";

  function handleProjectClick(name) {
    Smodel.setProject(name);
  }
</script>

<div class="space-y-12 flex flex-col items-center lg:py-72">
  {#each projects as project (project.name)}
    <button
      on:click={() => handleProjectClick(project.name)}
      class="rounded-lg shadow-xl overflow-hidden border border-secondary hover:border-dark transition-all duration-200 hover:scale-105 cursor-pointer relative group"
    >
      <div class="">
        <img src={project.thumbnail} alt={project.name} />
      </div>
      <div
        class="absolute bottom-[-100%] group-hover:bottom-0 top-[50%] left-0 right-0 opacity-0 group-hover:opacity-100 p-4 bg-gradient-to-t from-dark/80 to-transparent flex flex-col justify-end transition-all duration-200"
      >
        <h2 class="text-xl text-light text-left font-semibold mb-2">{project.name}</h2>
        <div class="flex gap-3 flex-wrap text-sm">
          {#each project.technologies as tech, index (tech)}
            <div class="font-semibold text-{COLORS[index % 3]}">
              {tech}
            </div>
          {/each}
        </div>
      </div>
    </button>
  {/each}
</div>
