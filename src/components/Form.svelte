<script>
  let formValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const handleSubmit = (e) => {
    //
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="grid grid-cols-2 gap-4 mt-16">
  <div class="relative">
    <label class="block font-light" for="fullname">Full Name:</label>
    <input
      type="text"
      bind:value={formValues.fullName}
      class="rounded w-full py-1.5 px-2 mt-1 ring-[1px] ring-secondary focus:ring-light focus:ring-2 focus:outline-none bg-light/40 font-semibold"
    />
    <div class="blur absolute bottom-1 left-1 right-1 top-[1.8rem] bg-light/40 -z-10" />
  </div>
  <div class="relative">
    <label class="block font-light" for="email">Email:</label>
    <input
      name="email"
      type="email"
      bind:value={formValues.email}
      class="rounded w-full py-1.5 px-2 mt-1 ring-[1px] ring-secondary focus:ring-light focus:ring-2 focus:outline-none bg-light/40 font-semibold"
    />
    <div class="blur absolute bottom-1 left-1 right-1 top-[1.8rem] bg-light/40 -z-10" />
  </div>
  <div class="col-span-full relative">
    <label class="block font-light" for="message">Message:</label>
    <textarea
      name="message"
      bind:value={formValues.message}
      class="rounded w-full py-1.5 px-2 mt-1 ring-[1px] ring-secondary focus:ring-light focus:ring-2 focus:outline-none bg-light/40 font-semibold"
    />
    <div class="blur absolute bottom-1 left-1 right-1 top-[1.8rem] bg-light/40 -z-10" />
  </div>
  <button
    class="rounded-xl shadow-xl hover:border hover:border-dark hover:bg-transparent hover:text-dark bg-dark text-light py-2 col-span-full transition-all duration-300"
    >Send Message</button
  >
</form>
