<script>
	function roll(){
		console.log('rolling')
	}
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1 class="title">idea app</h1>

<p>Try ...</p> <button on:click={roll} class="button is-light" type="button">re-roll</button>
