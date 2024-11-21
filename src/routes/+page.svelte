<script lang="ts">
  import "./index.css";
  import Navbar from "./components/navbar.svelte";
  import Hero from "./components/herosection.svelte";
  import Card from "./components/card.svelte";
  import allItems from "./data.json";
</script>

<div class="main">
  <div class="navbar sticky">
    <Navbar />
  </div>
  <Hero />
  <br />
  <div class="all-items mb-10">
    <div class="cofee" id="cofee">
      <div class="title mb-5">
        <center>
          <h1 class="text-4xl">Coffee</h1>
        </center>
      </div>
      <div class="catalog">
        {#each allItems.cofeeItems as item}
          <Card {item} />
        {/each}
      </div>
    </div>
    <div class="Tea" id="tea">
      <div class="title mb-5">
        <center>
          <h1 class="text-4xl">Tea</h1>
        </center>
      </div>
      <div class="catalog">
        {#each allItems.teaItems as item}
          <Card {item} />
        {/each}
      </div>
    </div>
    <div class="Juice" id="juice">
      <div class="title mb-5">
        <center>
          <h1 class="text-4xl">Juices</h1>
        </center>
      </div>
      <div class="catalog">
        {#each allItems.juiceItems as item}
          <Card {item} />
        {/each}
      </div>
    </div>
    <div class="Snacks" id="snack">
      <div class="title mb-5">
        <center>
          <h1 class="text-4xl">Shakes</h1>
        </center>
      </div>
      <div class="catalog">
        {#each allItems.ShakesItems as item}
          <Card {item} />
        {/each}
      </div>
    </div>
    <div class="Snacks" id="snack">
      <div class="title mb-5">
        <center>
          <h1 class="text-4xl">Snack</h1>
        </center>
      </div>
      <div class="catalog">
        {#each allItems.snackItems as item}
          <Card {item} />
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .catalog {
    display: flex;
    gap: 20px;
  }
  .navbar {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--base-200);
    backdrop-filter: blur(30px);
  }
</style>
