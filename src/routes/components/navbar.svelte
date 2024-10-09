<script lang="ts">
  let userImg: string = "https://youtube.com/favicon.ico";
  let items: number = 16;
  let subtotal: number = 6000;

  function logOut() {}
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      ></ul>
    </div>
    <a class="btn btn-ghost text-xl" href="/">Juice World</a>
  </div>
</div>

<div class="navbar-center hidden lg:flex">
  <ul class="menu menu-horizontal px-1">
    <li class="text-xl">
      <a href="#cofee">Cofee</a>
    </li>
    <li class="text-xl">
      <a href="#tea">Tea</a>
    </li>
    <li class="text-xl">
      <a href="#juice">Juice</a>
    </li>
    <li class="text-xl">
      <a href="#snack">Snacks</a>
    </li>
    <div class="form-control">
      <input
        type="text"
        placeholder="Search"
        class="input input-bordered w-full"
      />
      <li></li>
    </div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span class="badge badge-sm indicator-item">{items}</span>
        </div>
      </div>
      <div
        class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
      >
        <div class="card-body">
          <span class="text-lg font-bold">{items} Items</span>
          <span class="text-info">Subtotal: {subtotal}</span>
          <div class="card-actions">
            <a class="btn btn-primary btn-block" href="/cart">View Cart</a>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={userImg} />
        </div>
      </div>
      <ul
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li class="btn" on:click={logOut}>Logout</li>
      </ul>
    </div>
  </ul>
</div>
