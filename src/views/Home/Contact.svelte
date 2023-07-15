<script>
  import { details } from "../../data";
  import alertStore from "../../stores/alertStore";
  import Form from "./Form.svelte";

  async function copyToClipboard(value) {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(value);
        alertStore.setAlert("success", `The text '${value}' is in the Clipboard Now!`);
      } else {
        alertStore.setAlert("danger", `Clipboard API is Not Supported`);
      }
    } catch (err) {
      alertStore.setAlert("danger", `Failed to copy: ${err}`);
    }
  }
</script>

<div class="lg:max-w-[40vw]">
  <p class="">To contact me, please use the form below.</p>
  <p class="">Phone number and email are also an option, <b>click to copy!</b></p>
  <div class="flex justify-end flex-wrap gap-2 sm:gap-4 my-6">
    <button
      on:click={() => copyToClipboard(details[2])}
      class="bg-primary text-light font-light py-1 px-4 hover:bg-primary/50 border border-primary sm:text-xl transition-all duration-200"
    >
      {details[2]}
    </button>
    <button
      on:click={() => copyToClipboard(details[1].replaceAll(" ", ""))}
      class="bg-accent text-light font-light py-1 px-4 hover:bg-accent/50 border border-accent sm:text-xl transition-all duration-200"
    >
      {details[1]}
    </button>
  </div>
  <Form />
</div>
