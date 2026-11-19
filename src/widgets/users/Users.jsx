import { useEffect, useState } from "react";
import { getUsers } from "../../shared/api/users";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(setUsers);
    }, []);

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Users;
