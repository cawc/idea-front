<script>
    export let idea
    let originalIdea = JSON.parse(JSON.stringify(idea));
    let modalActive = false
    let unsavedChanges = false

    function toggleModal() {
        modalActive = !modalActive
    }

    async function saveIdea() {
        const response = await fetch(`http://localhost:5000/${idea._id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idea: idea.idea,
                description: idea.description,
                done: idea.done
            })
        })
        originalIdea = JSON.parse(JSON.stringify(idea));
    }

    function closeIdea() {
        idea = JSON.parse(JSON.stringify(originalIdea))
        toggleModal()
    }

</script>

<div on:click={toggleModal}>{idea.idea}</div>

<div class="modal" class:is-active={modalActive}>
    <div class="modal-background" on:click={closeIdea}></div>
    <div class="modal-content">
        <div class="box">
            <form>
                <div class="field">
                    <label for="idea" class="label">idea</label>
                    <div class="control">
                        <input id="idea" type="text" class="input" bind:value={idea.idea}>
                    </div>
                </div>
                <div class="field">
                    <label for="description" class="label">description</label>
                    <div class="control">
                        <input id="description" type="text" class="input" bind:value={idea.description}>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox" bind:checked={idea.done}> done
                        </label>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                      <button on:click={saveIdea} class="button is-primary" type="button">save</button>
                    </div>
                    <div class="control">
                      <button on:click={closeIdea} class="button is-light" type="button">close</button>
                    </div>
                  </div>
            </form>
        </div>
    </div>
    <button class="modal-close is-large" on:click={toggleModal} aria-label="close"></button>
</div>