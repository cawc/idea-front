<script>
    import { goto, stores } from '@sapper/app'
    const { session } = stores()

    let password = ''
    let username = ''
    let error

    async function handleLogin() {
        const response = await fetch('/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ username, password }),
        })

        const parsed = await response.json()
        if (parsed.error) {
            error = parsed.error;
        } else {
            $session.accessToken = parsed.accessToken;
            $session.refreshToken = parsed.refreshToken;
            goto("/ideas");
        }
    }
</script>

<form on:submit|preventDefault="{handleLogin}" method="post">
    <label>
        User:
        <input type="text" bind:value="{username}" />
    </label>
    <label>
        Password:
        <input type="password" bind:value="{password}" />
    </label>
    <button type="submit">Login</button>
</form>

{#if error}
    <p>{error}</p>
{/if}
