// src/pages/SignIn/TeacherSignupForm.jsx
import React, { useState } from "react";
import styles from "./SignInPage.module.css";

/**
 * 선생님 회원가입 폼
 */
function TeacherSignupForm({ onBackToLogin }) {
  const [teacherName, setTeacherName] = useState("");
  const [classCode, setClassCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 비밀번호 확인 검증
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }

    console.log("[TEACHER SIGNUP]", {
      teacherName,
      classCode,
      password,
    });
    alert("선생님 회원가입 기능은 아직 구현 중입니다 🙂");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="teacher-name">
          선생님 이름 <span className={styles.required}>*</span>
        </label>
        <input
          id="teacher-name"
          className={styles.input}
          type="text"
          placeholder="예: 김선생"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="teacher-class-code">
          수업 코드 <span className={styles.required}>*</span>
        </label>
        <input
          id="teacher-class-code"
          className={styles.input}
          type="text"
          placeholder="예: CHEM2024A"
          value={classCode}
          onChange={(e) => setClassCode(e.target.value)}
          required
        />
        <small className={styles.hint}>
          이 코드를 학생들에게 공유하여 수업에 참여하도록 하세요
        </small>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="teacher-password">
          비밀번호 <span className={styles.required}>*</span>
        </label>
        <input
          id="teacher-password"
          className={styles.input}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="teacher-password-confirm">
          비밀번호 확인 <span className={styles.required}>*</span>
        </label>
        <input
          id="teacher-password-confirm"
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

export default TeacherSignupForm;
