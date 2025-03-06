type AddressType = {
    street: string
    city: string
};

type UserType = {
    id: number
    name: string
    age: number
    address: AddressType
};

type UserListPropsType = {
    users: UserType[];
};

export const UserList = ({users}: UserListPropsType) => {
    if (!users.length) return null

    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>

            <ul>
                {users.map(({id, name, age, address}) => (
                    <li key={id} id={`hw01-user-${id}`}>
                        <strong>{name}</strong> (Age: {age})<strong> Address:</strong>
                        {address.street}, {address.city}
                    </li>
                ))}
            </ul>
        </div>
    );
};
