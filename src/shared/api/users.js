const USERS_API_URL = "https://dummyjson.com/users";

export function getUsers() {
    return fetch(USERS_API_URL)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Помилка завантаження: ${res.status}`);
            }

            return res.json();
        })
        .then((data) => data.users);
}
