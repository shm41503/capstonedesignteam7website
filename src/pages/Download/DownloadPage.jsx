import React from "react";
import styles from "./DownloadPage.module.css";

export default function DownloadPage() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Download ChemAR App</h1>
          <p>앱을 설치해서 AR 화학 실험을 시작해 보세요.</p>

          <button className={styles.btn}>Download APK</button>
        </div>
      </main>
    </div>
  );
}
