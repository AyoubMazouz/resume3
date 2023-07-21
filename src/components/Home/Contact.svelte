<script>
  import { fade } from "svelte/transition";
  import { details } from "../../data";
  import Form from "./Form.svelte";
  import { quintInOut } from "svelte/easing";
  import Icon from "@iconify/svelte";

  let phoneCopied = false;
  let emailCopied = false;

  async function copyEmailToClipboard() {
    await navigator.clipboard.writeText(details[2]);
    emailCopied = true;
    setTimeout(() => (emailCopied = false), 3000);
  }
  async function copyPhoneToClipboard() {
    await navigator.clipboard.writeText(details[1].replaceAll(" ", ""));
    phoneCopied = true;
    setTimeout(() => (phoneCopied = false), 3000);
  }
</script>

<div
  in:fade={{ delay: 200, duration: 200, easing: quintInOut }}
  out:fade={{ duration: 200, easing: quintInOut }}
  class="lg:max-w-[40vw]"
>
  <p class="">To contact me, please use the form below.</p>
  <p class="">Phone number and email are also an option, <b>click to copy!</b></p>
  <div class="flex justify-end flex-wrap gap-2 sm:gap-4 my-6">
    <button
      on:click={copyEmailToClipboard}
      class="flex justify-center items-center bg-primary text-light font-light py-1 px-4 hover:bg-primary/50 border border-primary sm:text-xl transition-all duration-200"
    >
      {#if emailCopied}
        <Icon icon="icon-park-outline:success" width="32px" class="absolute opacity-75" />
        <span class="opacity-0">{details[2]}</span>
      {:else}
        <span>{details[2]}</span>
      {/if}
    </button>
    <button
      on:click={copyPhoneToClipboard}
      class="flex justify-center items-center bg-accent text-light font-light py-1 px-4 hover:bg-accent/50 border border-accent sm:text-xl transition-all duration-200"
    >
      {#if phoneCopied}
        <Icon icon="icon-park-outline:success" width="32px" class="absolute opacity-75" />
        <span class="opacity-0">{details[1]}</span>
      {:else}
        <span>{details[1]}</span>
      {/if}
    </button>
  </div>
  <Form />
</div>
