// http://localhost:3000/api/users/

export const GET = async () => {
    // handle get request for /api/users
    const users = [
        {id : 1, name : 'John'},
        {id : 2, name : 'Mary'},
        {id : 3, name : 'Peter'}
    ]

    return new Response(JSON.stringify(users))
}