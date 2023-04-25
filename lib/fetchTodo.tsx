export default async function fetchTodo() {

    const res = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' })

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json()

};
