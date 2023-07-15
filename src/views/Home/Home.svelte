<script>
  import Projects from "../../components/Projects.svelte";
  import { fullName, title } from "../../data";

  import About from "./About.svelte";
  import Contact from "./Contact.svelte";
  import NavBar from "./NavBar.svelte";
  import Settings from "./Settings.svelte";

  let currTab = 0;
  const tabs = [About, Contact, Settings];
  function handleLinkClick(e) {
    currTab = e.detail;
  }
</script>

<!-- Navigation -->
<NavBar {currTab} on:linkClick={handleLinkClick} />

<div
  class="relative grid gap-x-12 gap-y-24 lg:grid-cols-2 max-w-[1400px] sm:px-12 md:pr-20 md:pl-24 lg:pr-12 lg:pl-16 px-4"
>
  <div class="hidden lg:block" />
  <div class="flex flex-col h-full pt-[10.25rem] lg:fixed">
    <h1
      class="text-3xl sm:text-5xl md:text-[3.75rem] lg:text-[5.5rem] xl:text-[7rem] absolute uppercase font-black whitespace-nowrap tracking-widest"
    >
      {fullName.join(" ")}
    </h1>
    <h2
      class="text-2xl sm:text-4xl font-light mt-[2.35rem] sm:mt-[3.35rem] md:mt-[4rem] lg:mt-[5rem] xl:mt-[6.5rem] mb-16"
    >
      {title}
    </h2>
    <svelte:component this={tabs[currTab]} on:linkClick={handleLinkClick} />
  </div>
  <div class="lg:py-[22rem]">
    <Projects />
  </div>
</div>
