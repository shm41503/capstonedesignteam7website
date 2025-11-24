import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>ChemAR</h1>

        <nav className={styles.nav}>
          <Link to="/" className={location.pathname === "/" ? styles.active : ""}>Home</Link>
          <Link to="/download" className={location.pathname === "/download" ? styles.active : ""}>Download</Link>
          <Link to="/signin" className={location.pathname === "/signin" ? styles.active : ""}>Sign In</Link>
        </nav>
      </div>
    </header>
  );
}
