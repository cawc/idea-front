import fetch from 'node-fetch'

export async function get(req, res) {
    const apicall = await fetch(`${process.env.API_URL}:${process.env.API_PORT}/ideas/random`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${req.session.accessToken}`
        }
    })
    const result = await apicall.json()
    res.end(JSON.stringify(result))
}
