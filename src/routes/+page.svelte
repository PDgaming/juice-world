<script lang="ts"
  import "./index.css";
  import Navbar from "./components/navbar.svelte";
  import Hero from "./components/herosection.svelte";

  let cofeeItems = [
    {
      title:
        "Nilgiris Flavoured Milk - Cold Coffee, Classic Pet Bottle, 180 ml ",
      price: "100rs",
      id: "coffee1",
      image: "https://m.media-amazon.com/images/I/61kkXdCENOL._SL1200_.jpg",
    },
  ];
  let teaItems = [
    {
      title:
        "Taaza Green Tea , 180 grams pack ",
      price: "100rs",
      id: "tea1",
      image: "https://m.media-amazon.com/images/I/61ygjeXuzqL._SX679_.jpg",
    },
  ];
  let juiceItems = [
    {
      title: "Top Juice Mango - 1L Alphonso Mango ",
      price: "100rs",
      id: "juice1",
      image: "https://m.media-amazon.com/images/I/61J3qiRVcJL._SL1500_.jpg",
    },
  ];
  let ShakesItems = [
    {
      title: "Spylt High Protein Vanilla Milkshake - Ready to Drink, Sugar Free" 
      price: "100rs",
      id: "Milk Shake1",
      image: "https://m.media-amazon.com/images/I/91n++9MRdyL._SL1500_.jpg",
    },
  ];
</script>

<div class="main">
  <div class="navbar">
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
      <div class="cataloge">
        {#each cofeeItems as item}
          <div class="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{item.title}</h2>
              <h2 class="card-price">{item.price}</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div class="Tea" id="tea">
      <div class="title mb-5">
        <center>
          <h1 class="text-4xl">Tea</h1>
        </center>
      </div>
      <div class="cataloge">
        {#each teaItems as item}
          <div class="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{item.title}</h2>
              <h2 class="card-price">{item.price}</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div class="Juice" id="juice">
      <div class="title mb-5">
        <center>
          <h1 class="text-4xl">Juices</h1>
        </center>
      </div>
      <div class="cataloge">
        {#each juiceItems as item}
          <div class="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{item.title}</h2>
              <h2 class="card-price">{item.price}</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div class="Snacks" id="snack">
      <div class="title mb-5">
        <center>
          <h1 class="text-4xl">Snack</h1>
        </center>
      </div>
      <div class="cataloge">
        {#each snackItems as item}
          <div class="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{item.title}</h2>
              <h2 class="card-price">{item.price}</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style></style>
