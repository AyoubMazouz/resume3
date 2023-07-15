<script>
  import emailjs from "@emailjs/browser";
  import alertStore from "../../stores/alertStore";

  let formValues = {
    name: "",
    email: "",
    msg: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_a5he7k9", "template_49l84no", formValues, "Aqf6ll3x8Oeh4hmcK").then(
      (result) => {
        alertStore.setAlert("Message has been sent successfully!");
        console.log(result.text);
      },
      (error) => {
        alertStore.setAlert("danger", "Something went wrong! Please try again.");
        console.log(error.text);
      }
    );
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="grid grid-cols-2 gap-2 sm:gap-4">
  <div class="relative col-span-full sm:col-span-1">
    <label class="block" for="fullname">Full Name:</label>
    <input
      type="text"
      bind:value={formValues.name}
      class="rounded-sm w-full py-0.5 px-2 mt-1 text-dark border border-white focus:outline-none focus:bg-light/75 hover:bg-light/75 bg-light font-semibold transition-all duration-200"
    />
    <div class="blur absolute bottom-1 left-1 right-1 top-[1.8rem] bg-light/30 -z-10" />
  </div>
  <div class="relative col-span-full sm:col-span-1">
    <label class="block" for="email">Email:</label>
    <input
      name="email"
      type="email"
      bind:value={formValues.email}
      class="rounded-sm w-full py-0.5 px-2 mt-1 text-dark border border-white focus:outline-none focus:bg-light/75 hover:bg-light/75 bg-light font-semibold transition-all duration-200"
    />
    <div class="blur absolute bottom-1 left-1 right-1 top-[1.8rem] bg-light/30 -z-10" />
  </div>
  <div class="col-span-full relative">
    <label class="block" for="message">Message:</label>
    <textarea
      name="message"
      bind:value={formValues.msg}
      class="rounded-sm w-full py-0.5 px-2 mt-1 text-dark border border-white focus:outline-none focus:bg-light/75 hover:bg-light/75 bg-light font-semibold transition-all duration-200"
    />
    <div class="blur absolute bottom-1 left-1 right-1 top-[1.8rem] bg-light/30 -z-10" />
  </div>
  <button
    class="relative rounded-sm col-span-full py-0.5 px-2 mt-1 text-dark border border-white focus:outline-none focus:bg-light/75 hover:bg-light/75 bg-light font-semibold transition-all duration-200"
    ><div class="blur absolute bottom-1 left-1 right-1 top-0 bg-light/30 -z-10" />
    Send Message!</button
  >
</form>
