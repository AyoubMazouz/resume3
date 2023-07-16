<script>
  import { createEventDispatcher } from "svelte";

  export let currTab = 0;
  const dispatch = createEventDispatcher();
</script>

<nav
  class="flex md:flex-col z-10 absolute md:fixed top-0 left-[50%] translate-x-[-50%] md:top-[50%] md:left-4 md:translate-y-[-50%] text-sm sm:text-base md:text-lg font-light"
>
  <button
    id="0"
    class="md:[writing-mode:vertical-lr] hover:underline hover:text-dark transition-all duration-200 tracking-widest uppercase px-6 md:px-0 md:py-6 hover:bg-secondary {currTab ===
    0
      ? 'bg-light text-dark'
      : ' '}"
    on:click={() => dispatch("linkClick", 0)}>About</button
  >
  <button
    id="1"
    class="md:[writing-mode:vertical-lr] hover:underline hover:text-dark transition-all duration-200 tracking-widest uppercase px-6 md:px-0 md:py-6 hover:bg-secondary {currTab ===
    1
      ? 'bg-light text-dark'
      : ' '}"
    on:click={() => dispatch("linkClick", 1)}>Contact</button
  >
  <button
    id="2"
    class="md:[writing-mode:vertical-lr] hover:underline hover:text-dark transition-all duration-200 tracking-widest uppercase px-6 md:px-0 md:py-6 hover:bg-secondary {currTab ===
    2
      ? 'bg-light text-dark'
      : ' '}"
    on:click={() => dispatch("linkClick", 2)}>Settings</button
  >
</nav>
