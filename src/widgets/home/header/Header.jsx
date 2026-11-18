import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <p className={styles.logo}>Users and Carts</p>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/carts">Carts</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
            <a className={styles.login} href="#">
                login
            </a>
        </header>
    );
};

export default Header;
