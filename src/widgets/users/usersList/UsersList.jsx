import { useEffect, useState } from "react";
import { getUsers } from "../../../shared/api/users";
import { NavLink } from "react-router-dom";
import styles from "./UsersList.module.scss";

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
                <li key={user.id}>
                    <NavLink
                        className={styles.usersLink}
                        to={`/users/${user.id}`}
                    >
                        <img
                            src={user.image}
                            alt={`${user.firstName} ${user.lastName}`}
                            className={styles.avatar}
                        />
                        <span className={styles.name}>
                            {user.firstName} {user.lastName}
                        </span>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Users;
