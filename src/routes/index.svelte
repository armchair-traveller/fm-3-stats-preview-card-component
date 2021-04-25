<script>
  import Attribution from "$lib/Attribution.svelte";
</script>

<svelte:head>
  <title>Frontend Mentor | Stats preview card component</title>
</svelte:head>

<main>
  <section>
    <h2>Get insights that help your business grow.</h2>

    <p>
      Discover the benefits of data analytics and make better decisions
      regarding revenue, customer experience, and overall efficiency.
    </p>

    <div>
      <h3>10k+</h3>
      <p>companies</p>
    </div>
    <div>
      <h3>314</h3>
      <p>templates</p>
    </div>
    <div>
      <h3>12m+</h3>
      <p>queries</p>
    </div>
  </section>
</main>

<img src="/images/image-header-desktop.jpg" alt="header" />
<img src="/images/image-header-mobile.jpg" alt="header" />

<Attribution />

<style>
  main {
    font-size: 15px;
    /* @apply bg-main-400 min-h-full; */
    /* @apply text-main-100; */
  }

  /* Breakpoints: 375px & 1440px*/
</style>
