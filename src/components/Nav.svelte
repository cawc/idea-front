<script>
	export let segment;
	let burger_active = false;
</script>

<div class="container">
<nav class="navbar">
	<div class="navbar-brand">
		<a href="/" class="navbar-item">idea</a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a role="button" class="navbar-burger" class:is-active="{burger_active}" aria-label="menu" aria-expanded="false" on:click="{() => burger_active = !burger_active}">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
	</div>
	<div class="navbar-menu" class:is-active="{burger_active}">
		<div class="navbar-start">
			<a class="navbar-item" class:is-active="{segment === undefined}" href=".">home</a>
			<a class="navbar-item" class:is-active="{segment === 'about'}" href="about">about</a>
			<a class="navbar-item" class:is-active="{segment === 'ideas'}" href="ideas" rel=prefetch>ideas</a>
		</div>
	</div>
</nav>
</div>