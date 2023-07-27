<script>
  import { createEventDispatcher } from "svelte";
  import { description, githubURL, linkedinURL } from "../../data";
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";
  import { quintInOut } from "svelte/easing";

  const dispatch = createEventDispatcher();
</script>

<div
  in:fade={{ delay: 200, duration: 200, easing: quintInOut }}
  out:fade={{ duration: 200, easing: quintInOut }}
  class="lg:w-1/2 lg:pr-6"
>
  <p class="indent-4 sm:text-2xl">
    {@html description}
  </p>

  <div class="flex flex-wrap gap-2 sm:gap-4 justify-between mt-10 lg:mt-36 items-center">
    <div class="flex gap-2 sm:gap-4 items-center">
      <button
        on:click={() => dispatch("linkClick", 1)}
        class="bg-primary text-light font-light py-1 px-4 hover:bg-primary/50 border border-primary sm:text-xl transition-all duration-200"
        >Contact <span class="hidden sm:inline">Me!</span></button
      >
      <a
        target="_blank"
        href="/MazouzAyoub.pdf"
        class="bg-accent text-light font-light py-1 px-4 hover:bg-accent/50 border border-accent sm:text-xl transition-all duration-200"
        ><span class="hidden sm:inline lg:hidden xl:inline">Download</span> Resume</a
      >
    </div>
    <div class="flex gap-2 sm:gap-4 items-center">
      <a target="_blank" href={linkedinURL}
        ><Icon
          icon="simple-icons:linkedin"
          width="38px"
          class="hover:opacity-75 transition-all duration-200"
        /></a
      >
      <a target="_blank" href={githubURL}>
        <Icon
          icon="fa6-brands:square-github"
          width="38px"
          class="hover:opacity-75 transition-all duration-200"
        />
      </a>
    </div>
  </div>
</div>
