import fetch from 'node-fetch'

export async function post(req, res) {
    try {
        const result = await fetch(`${process.env.API_URL}:${process.env.API_PORT}/auth/token`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ refreshToken: req.session.refreshToken })
        })

        const parsed = await result.json()

        if (result.status === 200) {
            req.session.accessToken = parsed.accessToken;
            res.end(JSON.stringify({ accessToken: parsed.accessToken }));
        } else {
            res.end(JSON.stringify({error: `Unexpected status code ${result.status}`}))
        }
    } catch (error) {
        res.end(JSON.stringify({ error: error.message }))
    }
}