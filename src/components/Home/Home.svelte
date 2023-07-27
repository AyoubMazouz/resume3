<script>
  import Projects from "../../components/Projects.svelte";
  import { fullName, title } from "../../data";
  import About from "./About.svelte";
  import Contact from "./Contact.svelte";
  import NavBar from "../../components/NavBar.svelte";
  import Settings from "./Settings.svelte";
  import { blur, fade } from "svelte/transition";
  import { quintInOut } from "svelte/easing";

  let currTab = 0;
  const tabs = [About, Contact, Settings];
  function handleLinkClick(e) {
    currTab = e.detail;
  }
</script>

<!-- Navigation -->
<NavBar {currTab} on:linkClick={handleLinkClick} />

<div
  in:fade={{ duration: 200, easing: quintInOut }}
  out:fade={{ duration: 200, easing: quintInOut }}
  class="flex lg:flex-row flex-col w-full px-2 sm:px-6 lg:pr-4 lg:pl-12"
>
  <div class="h-full lg:w-1/2 relative py-[10vh] lg:py-[20vh]">
    <div class="h-full fixed grid px-4">
      <div class="w-full">
        <h1
          class="text-3xl sm:text-5xl md:text-[3.75rem] lg:text-[5.5rem] xl:text-[7rem] absolute uppercase font-black whitespace-nowrap tracking-widest"
        >
          {fullName.join(" ")}
        </h1>
        <h2
          class="text-2xl sm:text-4xl font-light mt-[2.35rem] sm:mt-[3.35rem] md:mt-[4rem] lg:mt-[5rem] xl:mt-[6.5rem] mb-10"
        >
          {title}
        </h2>
        <svelte:component this={tabs[currTab]} on:linkClick={handleLinkClick} />
      </div>
    </div>
  </div>
  <div class="lg:w-1/2 max-w-[696px] lg:max-w-full py-[26rem] lg:py-[38vh] mx-auto">
    <Projects />
  </div>
</div>
