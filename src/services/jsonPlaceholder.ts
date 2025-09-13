export async function fetchPosts(limit = 10) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    if (!res.ok) throw new Error('JSONPlaceholder kļūda: ' + res.status)
    return (await res.json()) as Array < {
        id: number;title: string;body: string
    } >
}