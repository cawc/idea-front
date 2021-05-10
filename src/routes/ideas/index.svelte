<script context="module">
    export async function preload(page, session) {
        const res = await this.fetch('/ideas.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const ideas = await res.json()
        return { ideas }
    }
</script>

<script>
    import IdeaModal from '../../components/IdeaModal.svelte'
    export let ideas;
</script>

<svelte:head>
    <title>Ideas</title>
</svelte:head>

<h1 class="title">
    idea overview
</h1>
<p class="subtitle">
    overview all ideas / <button class="button is-primary is-small" aria-label="close">add new</button>
</p>

<ul>
{#each ideas as idea}
    <li> <IdeaModal idea={idea} /> </li>
{/each}
</ul>




