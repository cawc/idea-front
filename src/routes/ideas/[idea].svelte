<script context="module">
    export async function preload(page, session) {
        const idea_id = page.params.idea
        const res = await this.fetch(`http://localhost:5000/${idea_id}`)
        const idea = await res.json()
        console.log(idea)
        return {idea}
    }
</script>

<script>
    export let idea;
</script>

<svelte:head>
    <title>{idea.idea}</title>
</svelte:head>

<h1>{idea.idea}</h1>

<p>{idea.description}</p>