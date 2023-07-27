<script>
  import emailjs from "@emailjs/browser";
  import Icon from "@iconify/svelte";

  let loading = false;
  let feedBack = "";
  let formValues = {
    name: "",
    email: "",
    msg: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loading = true;
    emailjs.send("service_a5he7k9", "template_49l84no", formValues, "Aqf6ll3x8Oeh4hmcK").then(
      (result) => {
        loading = false;
        feedBack = "Message has been sent!";
        console.log(result.text);
        setTimeout(() => (feedBack = ""), 10000);
      },
      (error) => {
        feedBack = "Something went wrong! Please try again.";
        loading = false;
        console.log(error.text);
        setTimeout(() => (feedBack = ""), 10000);
      }
    );
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="grid grid-cols-2 gap-2 sm:gap-4">
  <div class="relative col-span-full sm:col-span-1">
    <label class="block text-sm sm:text-base" for="fullname">Full Name:</label>
    <input
      type="text"
      bind:value={formValues.name}
      class="rounded-sm w-full p-0.5 lg:p-2 mt-1 text-dark border border-white focus:outline-none focus:bg-light/75 hover:bg-light/75 bg-light font-semibold transition-all duration-200"
    />
    <div class="blur absolute bottom-1 left-1 right-1 top-[1.8rem] bg-light/30 -z-10" />
  </div>
  <div class="relative col-span-full sm:col-span-1">
    <label class="block text-sm sm:text-base" for="email">Email:</label>
    <input
      name="email"
      type="email"
      bind:value={formValues.email}
      class="rounded-sm w-full p-0.5 lg:p-2 mt-1 text-dark border border-white focus:outline-none focus:bg-light/75 hover:bg-light/75 bg-light font-semibold transition-all duration-200"
    />
    <div class="blur absolute bottom-1 left-1 right-1 top-[1.8rem] bg-light/30 -z-10" />
  </div>
  <div class="col-span-full relative">
    <label class="block text-sm sm:text-base" for="message">Message:</label>
    <textarea
      name="message"
      bind:value={formValues.msg}
      class="rounded-sm w-full p-0.5 lg:p-2 mt-1 text-dark border border-white focus:outline-none focus:bg-light/75 hover:bg-light/75 bg-light font-semibold transition-all duration-200"
    />
    <div class="blur absolute bottom-1 left-1 right-1 top-[1.8rem] bg-light/30 -z-10" />
  </div>
  <button
    disabled={loading}
    class="relative rounded-sm col-span-full p-0.5 lg:p-2 mt-1 text-dark border border-white focus:outline-none focus:bg-light/75 hover:bg-light/75 bg-light font-semibold transition-all duration-200 flex justify-center items-center"
  >
    <div class="blur absolute bottom-1 left-1 right-1 top-0 bg-light/30 -z-10" />
    {#if loading}
      <Icon icon="line-md:loading-twotone-loop" width="32px" />
    {:else if feedBack}
      <span>{feedBack}</span>
    {:else}
      <span>Send Message!</span>
    {/if}
  </button>
</form>
