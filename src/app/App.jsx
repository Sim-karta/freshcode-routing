import HomePage from "../pages/home/ui/HomePage";
import CartsPage from "../pages/home/ui/CartsPage";
import UsersPage from "../pages/home/ui/UsersPage";
import Header from "../widgets/home/header/Header";
import Footer from "../widgets/home/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
    return (
        <Router>
            <div className={styles.app}>
                <Header />
                <main className={styles.main}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/carts" element={<CartsPage />} />
                        <Route path="/users" element={<UsersPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
