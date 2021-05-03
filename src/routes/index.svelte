<script>
  import Attribution from "$lib/Attribution.svelte";
</script>

<svelte:head>
  <title>Frontend Mentor | Stats preview card component</title>
</svelte:head>

<main class="min-h-screen bg-main-300 text-white grid place-content-center">
  <section
    class="bg-main-200 w-[330px] overflow-hidden rounded-lg text-center mb-2"
  >
    <img
      class="hidden lg:block"
      src="/images/image-header-desktop.jpg"
      alt="header"
    />
    <img class="lg:hidden" src="/images/image-header-mobile.jpg" alt="header" />

    <div class="p-9">
      <h2 class="font-bold text-[1.7rem] mb-4 leading-8">
        Get <span class="text-main-100">insights</span> that help your business grow.
      </h2>

      <p class="opacity-75 leading-[25px] mb-10">
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>

      <div class="space-y-6">
        <div>
          <h3 class="font-bold text-2xl mb-1">10k+</h3>
          <p class="opacity-60 uppercase tracking-[1.5px] text-xs">companies</p>
        </div>
        <div>
          <h3 class="font-bold text-2xl mb-1">314</h3>
          <p class="opacity-60 uppercase tracking-[1.5px] text-xs">templates</p>
        </div>
        <div>
          <h3 class="font-bold text-2xl mb-1 uppercase">12m+</h3>
          <p class="opacity-60 uppercase tracking-[1.5px] text-xs">queries</p>
        </div>
      </div>
    </div>
  </section>
  <Attribution />
</main>

<style>
  main {
    font-size: 15px;
    font-family: "Inter", system-ui;
  }

  img {
    filter: sepia(100%) saturate(300%) brightness(60%) hue-rotate(235deg);
  }

  /* Style Guide
  Breakpoints: 375px & 1440px
  Fonts: "Inter", "Lexend Deca" 
  Neutral colors: Opacity
  - main paragraph: 0.75
  - stat headings: 0.6 */
</style>
