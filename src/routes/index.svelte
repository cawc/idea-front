<script>
	export let idea = '...'
	async function roll(){
		const response = await fetch(`/ideas/random.json`, {
            method: "GET",
			headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
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
