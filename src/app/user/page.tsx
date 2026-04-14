type UserListProps = {
    id: number;
    name: string;
}

async function fetchUsers(): Promise<UserListProps[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Steve Rogers' },
                { id: 2, name: 'Tony Stark' },
                { id: 3, name: 'Bruce Banner' },
                { id: 4, name: 'Natasha Romanoff' },
                { id: 5, name: 'Thor' },
                { id: 6, name: 'Clint Barton' },
            ])
        }, 2000)
    })
}

async function UserList() {
    const userList = await fetchUsers()
    return (
        <div className="mt-20 text-white">
            {userList.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}

export default function UserListPage() {
    return (
        <>
            <h1>Lista de usuários</h1>
            <UserList />
        </>
    )
}
