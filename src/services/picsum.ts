export async function fetchPicsum(limit = 12) {
    const res = await fetch(`https://picsum.photos/v2/list?page=1&limit=${limit}`)
    if (!res.ok) throw new Error('Picsum kļūda: ' + res.status)
    const data = (await res.json()) as Array < {
            id: string;download_url: string;author: string
        } >
        // mazāka izšķirtspēja labākai ielādei
        return data.map((i) => ({
            ...i,
            download_url: `https://picsum.photos/id/${i.id}/800/600`
        }))
}