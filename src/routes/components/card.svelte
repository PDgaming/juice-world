<script lang="ts">
  import { onMount } from "svelte";
  import { cart } from "$lib/stores/cart";

  export let item: {
    title: string;
    price: number;
    id: string;
    image: string;
  };

  function addToCard(productId: string) {
    console.log("Item being added: ", item);

    cart.update((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === productId);

      const newCart = [
        ...currentCart,
        {
          id: productId,
          quantity: 1,
          title: item.title,
          price: item.price,
          image: item.image,
        },
      ];

      console.log("New cart state:", newCart);
      return newCart;
    });
  }
</script>

<div class="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img src={item.image} alt={item.title} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{item.title}</h2>
    <h2 class="card-price">{item.price}rs</h2>

    <div class="card-actions justify-end">
      <button class="btn btn-primary" on:click={() => addToCard(item.id)}
        >Add to Cart</button
      >
    </div>
  </div>
</div>

<style>
  :root {
    --image-size--: 300px;
  }
  img {
    height: var(--image-size--);
    width: var(--image-size--);
  }
</style>
