<script lang="ts">
  export let item: any;
</script>

<div class="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img src={item.image} alt={item.title} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{item.title}</h2>
    <h2 class="card-price">{item.price}rs</h2>

    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<style>
  img {
    height: 400px;
  }
</style>
