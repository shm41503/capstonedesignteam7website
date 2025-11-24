// src/pages/Home/LandingPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import flaskCharacter from "../../assets/mascot/FlaskCharacter_front.png";

// Text for Korean & English
const COPY = {
  ko: {
    tagline: "AR 화학 실험 플랫폼",
    titleLine1: "AR 실험으로",
    titleLine2: "화학을 쉽고 재미있게",
    sub: "위험한 실험 기구 없이, 현실감 있는 화학 반응을 AR로 안전하게 실험해 보세요.",

    btnStudent: "학생 로그인",
    btnTeacher: "선생님 로그인",
    btnDownload: "앱 다운로드",

    card1Title: "왜 AR 화학 실험실인가요?",
    card1Lines: [
      "실험 기구 없이도 안전하게 실험 가능",
      "AR로 실험 과정을 직관적으로 이해",
      "학생 참여도 & 집중도 향상",
    ],

    card2Title: "어떻게 사용하나요?",
    card2Lines: [
      "Step 1 – 웹에서 로그인",
      "Step 2 – 앱에서 AR 실험 진행",
      "Step 3 – 웹에서 결과 / 성적 확인",
    ],

    card3Title: "ChemAR 앱 사용 흐름",
    card3Lines: [
      "① 선생님이 반 코드를 생성하고 학생들과 공유합니다.",
      "② 학생은 앱에서 반 코드를 입력하고 AR 실험을 진행합니다.",
      "③ 실험 결과(점수, 별, 시간)는 서버/로컬로 저장됩니다.",
      "④ 선생님/학생은 웹 대시보드에서 실험 기록과 성취도를 확인합니다.",
    ],

    mascotAlt: "ChemAR 보라색 플라스크 캐릭터",
  },

  en: {
    tagline: "AR Chemical Experiment Platform",
    titleLine1: "Learn Chemistry",
    titleLine2: "with Interactive AR Experiments",
    sub: "Run realistic chemical reactions safely through augmented reality, without real lab hazards.",

    btnStudent: "Student Login",
    btnTeacher: "Teacher Login",
    btnDownload: "Download App",

    card1Title: "Why an AR Chemistry Lab?",
    card1Lines: [
      "Run experiments safely without real lab equipment",
      "Understand reactions visually through AR",
      "Increase student engagement and focus",
    ],

    card2Title: "How does it work?",
    card2Lines: [
      "Step 1 – Log in on the web",
      "Step 2 – Run AR experiments in the app",
      "Step 3 – Check results & scores on the web",
    ],

    card3Title: "How to use the ChemAR App",
    card3Lines: [
      "① Teacher creates a class code and shares it with students.",
      "② Students enter the class code in the app and run AR experiments.",
      "③ Scores, stars and timestamps are stored on server/local DB.",
      "④ Teacher & students review progress on the web dashboards.",
    ],

    mascotAlt: "ChemAR purple flask character",
  },
};

export default function LandingPage() {
  const [lang, setLang] = useState("ko");
  const t = COPY[lang];

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* LEFT – TEXT AREA */}
        <section className={styles.left}>
          <p className={styles.tagline}>{t.tagline}</p>

          <h1 className={styles.title}>
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h1>

          <p className={styles.sub}>{t.sub}</p>

          {/* LANGUAGE TOGGLE */}
          <div className={styles.langToggle}>
            <button
              type="button"
              onClick={() => setLang("ko")}
              className={`${styles.langButton} ${
                lang === "ko" ? styles.langActive : ""
              }`}
            >
              한국어
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`${styles.langButton} ${
                lang === "en" ? styles.langActive : ""
              }`}
            >
              English
            </button>
          </div>

          {/* MAIN CTA BUTTONS */}
          <div className={styles.buttons}>
            <Link to="/signin?role=student" className={styles.btnPrimary}>
              {t.btnStudent}
            </Link>
            <Link to="/signin?role=teacher" className={styles.btnGhost}>
              {t.btnTeacher}
            </Link>
            <Link to="/download" className={styles.btnAccent}>
              {t.btnDownload}
            </Link>
          </div>

          {/* INFO CARDS */}
          <div className={styles.card}>
            <h2>{t.card1Title}</h2>
            <ul>
              {t.card1Lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h2>{t.card2Title}</h2>
            <ol>
              {t.card2Lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </div>

          <div className={styles.card}>
            <h2>{t.card3Title}</h2>
            <ol>
              {t.card3Lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </div>
        </section>

        {/* RIGHT – MASCOT */}
        <section className={styles.right}>
          <img
            src={flaskCharacter}
            alt={t.mascotAlt}
            className={styles.character}
          />
        </section>
      </div>
    </div>
  );
}
