<script>
  import "../app.css";
  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<div class="app min-h-screen bg-[#1e1e1e] dark">
  <main>
    <slot />
  </main>
</div>
