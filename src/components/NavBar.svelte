<script>
  import { createEventDispatcher } from "svelte";

  export let currTab = 0;
  const dispatch = createEventDispatcher();
</script>

<nav
  class="flex lg:flex-col z-10 absolute lg:fixed top-0 left-[50%] translate-x-[-50%] lg:top-[50%] lg:left-4 lg:translate-y-[-50%] text-sm sm:text-base lg:text-lg font-light"
>
  <button
    id="0"
    class="lg:[writing-mode:vertical-lr] hover:underline hover:text-dark transition-all duration-200 tracking-widest uppercase px-6 lg:px-0 lg:py-6 hover:bg-secondary {currTab ===
    0
      ? 'bg-light text-dark'
      : ' '}"
    on:click={() => dispatch("linkClick", 0)}>About</button
  >
  <button
    id="1"
    class="lg:[writing-mode:vertical-lr] hover:underline hover:text-dark transition-all duration-200 tracking-widest uppercase px-6 lg:px-0 lg:py-6 hover:bg-secondary {currTab ===
    1
      ? 'bg-light text-dark'
      : ' '}"
    on:click={() => dispatch("linkClick", 1)}>Contact</button
  >
  <button
    id="2"
    class="lg:[writing-mode:vertical-lr] hover:underline hover:text-dark transition-all duration-200 tracking-widest uppercase px-6 lg:px-0 lg:py-6 hover:bg-secondary {currTab ===
    2
      ? 'bg-light text-dark'
      : ' '}"
    on:click={() => dispatch("linkClick", 2)}>Settings</button
  >
</nav>
