<script>
	export let idea = '...'
	async function roll(){
		console.log('rolling')
		const response = await fetch(`http://localhost:5000/random`, {
            method: "GET"
		})
		const ideaJson = await response.json()
		idea = ideaJson.idea
	}
	
</script>

<svelte:head>
	<title>idea</title>
</svelte:head>

<h1 class="title">idea app</h1>

<p>Try {idea}</p> <button on:click={roll} class="button is-light" type="button">roll</button>
