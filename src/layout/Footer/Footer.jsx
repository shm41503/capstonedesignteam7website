import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <h2 className={styles.logo}>ChemAR</h2>
          <p className={styles.desc}>
            AR Chemical Experiment Platform<br />
            Capstone Design Team 7
          </p>
        </div>

        <div className={styles.right}>
          <p>© 2025 Sungkyunkwan University</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
