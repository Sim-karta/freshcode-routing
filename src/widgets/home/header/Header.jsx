import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <p className={styles.logo}>Users and Carts</p>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>Home</li>
                    <li className={styles.navItem}>Carts</li>
                    <li className={styles.navItem}>Users</li>
                </ul>
            </nav>
            <a className={styles.login} href="#">
                login
            </a>
        </header>
    );
};

export default Header;
