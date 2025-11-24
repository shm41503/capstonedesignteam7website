// src/pages/SignIn/StudentSignupForm.jsx
import React, { useState } from "react";
import styles from "./SignInPage.module.css";

/**
 * 학생 회원가입 폼
 */
function StudentSignupForm({ onBackToLogin }) {
  const [studentName, setStudentName] = useState("");
  const [classCode, setClassCode] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 비밀번호 확인 검증
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }

    console.log("[STUDENT SIGNUP]", {
      studentName,
      classCode,
      studentNumber,
      password,
    });
    alert("학생 회원가입 기능은 아직 구현 중입니다 🙂");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="student-name">
          학생 이름 <span className={styles.required}>*</span>
        </label>
        <input
          id="student-name"
          className={styles.input}
          type="text"
          placeholder="예: 홍길동"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="class-code">
          수업 코드 <span className={styles.required}>*</span>
        </label>
        <input
          id="class-code"
          className={styles.input}
          type="text"
          placeholder="예: CHEM2024A"
          value={classCode}
          onChange={(e) => setClassCode(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="student-number">
          반 번호 <span className={styles.required}>*</span>
        </label>
        <input
          id="student-number"
          className={styles.input}
          type="number"
          placeholder="예: 12"
          value={studentNumber}
          onChange={(e) => setStudentNumber(e.target.value)}
          required
          min="1"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="student-password">
          비밀번호 <span className={styles.required}>*</span>
        </label>
        <input
          id="student-password"
          className={styles.input}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="student-password-confirm">
          비밀번호 확인 <span className={styles.required}>*</span>
        </label>
        <input
          id="student-password-confirm"
          className={styles.input}
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
      </div>

      <button type="submit" className={styles.buttonPrimary}>
        회원가입
      </button>

      {/* 로그인으로 돌아가기 */}
      <div className={styles.backToLogin}>
        <p className={styles.switchText}>
          이미 계정이 있나요?{" "}
          <button
            type="button"
            className={styles.linkButton}
            onClick={onBackToLogin}
          >
            로그인
          </button>
        </p>
      </div>
    </form>
  );
}

export default StudentSignupForm;
