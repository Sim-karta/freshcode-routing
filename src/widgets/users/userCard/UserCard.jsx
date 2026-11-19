import { useEffect, useState } from "react";
import { getUserCarts } from "../../../shared/api/users";
import styles from "./UserCard.module.scss";

const UserCard = (props) => {
    const { user } = props;
    const [activeTab, setActiveTab] = useState("info");
    const [carts, setCarts] = useState([]);
    const [cartsIsLoading, setCartsIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        setCartsIsLoading(true);
        setError(undefined);

        getUserCarts(user.id)
            .then(setCarts)
            .catch((err) => setError(err.message))
            .finally(() => {
                setCartsIsLoading(false);
            });
    }, []);

    return (
        <article className={styles.profile}>
            <header className={styles.header}>
                <img
                    className={styles.avatar}
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                />
                <h2>
                    {user.firstName} {user.lastName}
                </h2>
            </header>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <button
                            type="button"
                            className={`${styles.tab} ${
                                activeTab === "info" ? styles.activeTab : ""
                            }`}
                            onClick={() => setActiveTab("info")}
                        >
                            Info
                        </button>
                    </li>
                    <li className={styles.navItem}>
                        <button
                            type="button"
                            className={`${styles.tab} ${
                                activeTab === "carts" ? styles.activeTab : ""
                            }`}
                            onClick={() => setActiveTab("carts")}
                        >
                            Cart
                        </button>
                    </li>
                </ul>
            </nav>
            <main className={styles.main}>
                {activeTab === "info" ? (
                    <>
                        <div className={styles.info}>
                            <p
                                className={styles.infoParagraph}
                            >{`Вік: ${user.age}`}</p>
                            <p
                                className={styles.infoParagraph}
                            >{`Компанія: ${user.company.name}`}</p>
                            <p
                                className={styles.infoParagraph}
                            >{`Адрес: ${user.address.address}`}</p>
                        </div>
                        <div className={styles.contacts}>
                            <p
                                className={styles.infoParagraph}
                            >{`Email: ${user.email}`}</p>
                            <p
                                className={styles.infoParagraph}
                            >{`Телефон: ${user.phone}`}</p>
                        </div>
                    </>
                ) : (
                    <div className={styles.carts}>
                        {cartsIsLoading && <p>Завантаження...</p>}
                        {!cartsIsLoading && error && <p>{error}</p>}
                        {!cartsIsLoading && !error && carts.length === 0 && (
                            <p>Кошиків немає</p>
                        )}
                        {!cartsIsLoading &&
                            !error &&
                            carts.map((cart) => (
                                <section className={styles.cart} key={cart.id}>
                                    <h3 className={styles.cartTitle}>
                                        Кошик #{cart.id}
                                    </h3>
                                    <ul className={styles.cartProducts}>
                                        {cart.products.map((product) => (
                                            <li
                                                className={styles.cartProduct}
                                                key={product.id}
                                            >
                                                <span>{product.title}</span>
                                                <span>
                                                    {product.quantity} × $
                                                    {product.price}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className={styles.cartTotal}>
                                        Всього: ${cart.total}
                                    </p>
                                </section>
                            ))}
                    </div>
                )}
            </main>
        </article>
    );
};

export default UserCard;
