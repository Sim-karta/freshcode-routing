import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../shared/api/users";
import UserCard from "../../widgets/users/userCard/UserCard";
import styles from "./UserPage.module.scss";

function UserPage() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        setIsLoading(true);
        setError(undefined);
        setUser(null);

        getUser(id)
            .then(setUser)
            .catch((err) => setError(err.message))
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    if (error) {
        return <p className={styles.message}>{error}</p>;
    }

    if (isLoading) {
        return <p className={styles.message}>Завантаження...</p>;
    }

    return <UserCard key={user.id} user={user} />;
}

export default UserPage;
