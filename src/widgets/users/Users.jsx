import { useEffect, useState } from "react";
import { getUsers } from "../../shared/api/users";
import styles from "./Users.module.scss";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(setUsers)
            .catch((error) => console.error(error));
    }, []);

    return (
        <ul className={styles.usersList}>
            {users.map((user) => (
                <li key={user.id} className={styles.usersItem}>
                    <img
                        src={user.image}
                        alt={`${user.firstName} ${user.lastName}`}
                        className={styles.avatar}
                    />
                    <p className={styles.name}>
                        {user.firstName} {user.lastName}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default Users;
