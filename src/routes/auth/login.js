import fetch from 'node-fetch'

export async function post(req, res) {
    try {
        const { username, password } = req.body
        const result = await fetch(`${process.env.API_URL}:${process.env.API_PORT}/auth/authenticate`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({ username, password })
        })

        const parsed = await result.json()

        req.session.accessToken = parsed.accessToken;
        req.session.refreshToken = parsed.refreshToken;
        res.end(JSON.stringify({ accessToken: parsed.accessToken, refreshToken: parsed.refreshToken }));
    } catch (error) {
        res.end(JSON.stringify({ error: error.message }))
    }
}