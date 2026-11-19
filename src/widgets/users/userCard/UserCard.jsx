import styles from "./UserCard.module.scss";

const UserCard = (props) => {
    const { user } = props;

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
            <main className={styles.main}>
                <div className={styles.info}>
                    <p className={styles.infoParagraph}>{`Вік: ${user.age}`}</p>
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
            </main>
        </article>
    );
};

export default UserCard;
