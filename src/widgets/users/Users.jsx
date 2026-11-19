import { useEffect, useState } from "react";
import { getUsers } from "../../shared/api/users";
import { Link } from "react-router-dom";
import styles from "./Users.module.scss";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        getUsers()
            .then(setUsers)
            .catch((err) => setError(err.message));
    }, []);

    return error ? (
        <p className={styles.error}>{error}</p>
    ) : (
        <ul className={styles.usersList}>
            {users.map((user) => (
                <li key={user.id} className={styles.usersItem}>
                    <Link to={`/users/${user.id}`}>
                        <img
                            src={user.image}
                            alt={`${user.firstName} ${user.lastName}`}
                            className={styles.avatar}
                        />
                        <p className={styles.name}>
                            {user.firstName} {user.lastName}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Users;
