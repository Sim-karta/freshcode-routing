import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

function NotFoundPage() {
    return (
        <section className={styles.notFound}>
            <p className={styles.code}>404</p>
            <h2 className={styles.title}>Сторінку не знайдено</h2>
            <Link className={styles.homeLink} to="/">
                На головну
            </Link>
        </section>
    );
}

export default NotFoundPage;
