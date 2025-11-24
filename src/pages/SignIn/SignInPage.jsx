// src/pages/SignIn/SignInPage.jsx
import React, { useState } from "react";
import styles from "./SignInPage.module.css";
import LoginForm from "./LoginForm";
import StudentSignupForm from "./StudentSignupForm";
import TeacherSignupForm from "./TeacherSignupForm";

function SignInPage() {
  // "login", "studentSignup", "teacherSignup"
  const [view, setView] = useState("login");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.card}>
          <h1 className={styles.brand}>Chem Lab AR</h1>
          <p className={styles.subtitle}>
            AR Chemical Experiment Platform
          </p>

          {/* 뷰에 따라 제목 표시 */}
          <h2 className={styles.viewTitle}>
            {view === "login" && "LOGIN"}
            {view === "studentSignup" && "Create Account"}
            {view === "teacherSignup" && "Create Account"}
          </h2>

          {/* 뷰에 따라 다른 폼 보여주기 */}
          <div className={styles.formWrapper}>
            {view === "login" && (
              <LoginForm
                onSwitchToStudentSignup={() => setView("studentSignup")}
                onSwitchToTeacherSignup={() => setView("teacherSignup")}
              />
            )}
            {view === "studentSignup" && (
              <StudentSignupForm onBackToLogin={() => setView("login")} />
            )}
            {view === "teacherSignup" && (
              <TeacherSignupForm onBackToLogin={() => setView("login")} />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignInPage;
