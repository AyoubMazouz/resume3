<script>
  import { createEventDispatcher } from "svelte";
  import { description, githubURL, linkedinURL } from "../../data";
  import Icon from "@iconify/svelte";

  const dispatch = createEventDispatcher();
</script>

<div class="">
  <p class="indent-4 max-w-full sm:text-2xl lg:max-w-[30ch] xl:max-w-[35ch]">
    {@html description}
  </p>

  <div class="flex gap-2 sm:gap-4 justify-between mt-16 items-center">
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
        ><span class="hidden sm:inline">Download</span> Resume</a
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
