import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../shared/api/users";

const UserPage = () => {
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
            .finally(setIsLoading(false));
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (isLoading) {
        return <p>Завантаження...</p>;
    }

    return (
        <div>
            <div>
                <img
                    src={user?.image}
                    alt={`${user?.firstName} ${user?.lastName}`}
                />
                <h1>
                    {user?.firstName} {user?.lastName}
                </h1>
            </div>
        </div>
    );
};

export default UserPage;
