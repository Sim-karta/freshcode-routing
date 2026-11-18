import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.author}>Make by Sim-Karta</p>
            <small className={styles.copyright}>
                © {new Date().getFullYear()} Users and Carts
            </small>
        </footer>
    );
};

export default Footer;
