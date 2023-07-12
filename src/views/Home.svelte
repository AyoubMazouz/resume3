<script>
  import Form from "../components/Form.svelte";
  import Projects from "../components/Projects.svelte";

  import { description, fullName, title } from "../data";
</script>

<div class="relative grid gap-x-24 gap-y-36 lg:grid-cols-2 max-w-[1400px] lg:px-10 px-4">
  <div class="hidden lg:block" />
  <div class="flex flex-col h-full pt-32 lg:fixed">
    <div class="px-2">
      <h1 class="text-[7rem] uppercase font-bold absolute whitespace-nowrap tracking-widest">
        {fullName.join(" ")}
      </h1>
      <h2 class="text-4xl mb-8 mt-[8.5rem] font-light">{title}</h2>
      <p class="indent-4 max-w-[50ch]">{@html description}</p>
      <Form />
    </div>
  </div>
  <Projects />
</div>
