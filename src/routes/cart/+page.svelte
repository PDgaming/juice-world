<script>
    import ProductList from './ProductList.svelte';
    import Cart from './Cart.svelte';

    let cart = [];

    function addToCart(product) {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart = [...cart, { ...product, quantity: 1 }];
        }
    }
</script>

<main>
    <h1>My Store</h1>
    <ProductList {addToCart} />
    <Cart {cart} />
</main>

<style>
    main {
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
</style>
<script>
    export let addToCart;

    const products = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
        { id: 3, name: 'Product 3', price: 39.99 },
    ];
</script>

<div>
    <h2>Products</h2>
    <ul>
        {#each products as product}
            <li key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price.toFixed(2)}</p>
                <button on:click={() => addToCart(product)}>Add to Cart</button>
            </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        margin-bottom: 20px;
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>
<script>
    export let cart;

    // Calculate total using a reactive statement
    $: total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>

<div>
    <h2>Shopping Cart</h2>
    {#if cart.length === 0}
        <p>Your cart is empty.</p>
    {:else}
        <ul>
            {#each cart as item (item.id)}
                <li>
                    {item.name} - ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                </li>
            {/each}
        </ul>
        <h3>Total: ${total.toFixed(2)}</h3>
    {/if}
</div>

<style>
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        margin-bottom: 10px;
    }
</style>
