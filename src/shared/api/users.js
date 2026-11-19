const USERS_API_URL = "https://dummyjson.com/users";

function fetchJson(url) {
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`Помилка завантаження: ${response.status}`);
        }

        return response.json();
    });
}

export function getUsers() {
    return fetchJson(USERS_API_URL).then((data) => data.users);
}

export function getUser(id) {
    return fetchJson(`${USERS_API_URL}/${id}`);
}
