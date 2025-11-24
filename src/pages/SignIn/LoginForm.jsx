// src/pages/SignIn/LoginForm.jsx
import React, { useState } from "react";
import styles from "./SignInPage.module.css";

/**
 * 로그인 폼
 * 하단에 학생/선생님 회원가입 링크
 */
function LoginForm({ onSwitchToStudentSignup, onSwitchToTeacherSignup }) {
  const [userType, setUserType] = useState("student"); // "student" 또는 "teacher"
  const [name, setName] = useState("");
  const [classCode, setClassCode] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
        // 백엔드 스펙에 맞춘 형태로 payload만 만들어 둠
    const payload =
      userType === "teacher"
        ? {
            teachername: name,
            classcode: classCode,
          }
        : {
            username: name,
            classcode: classCode,
          };

    console.log("[LOGIN]", { userType, ...payload });

    // TODO: 백엔드에서 로그인 API 스펙 나오면 여기서 fetch 추가
    // 예시:
    // const url = userType === "teacher" ? "/teacher/login" : "/student/login";
    // const res = await fetch(url, { method: "POST", body: JSON.stringify(payload) })

    alert("로그인 기능은 아직 백엔드와 연동 중입니다 🙂");
    /*
    console.log("[LOGIN]", { 
      userType, 
      name, 
      classCode, 
      password 
    });
    alert("로그인 기능은 아직 구현 중입니다 🙂");*/
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* 사용자 유형 선택 */}
      <div className={styles.field}>
        <label className={styles.label}>사용자 유형</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="userType"
              value="student"
              checked={userType === "student"}
              onChange={(e) => setUserType(e.target.value)}
              className={styles.radio}
            />
            <span>학생</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="userType"
              value="teacher"
              checked={userType === "teacher"}
              onChange={(e) => setUserType(e.target.value)}
              className={styles.radio}
            />
            <span>선생님</span>
          </label>
        </div>
      </div>

      {/* 이름 */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="login-name">
          이름
        </label>
        <input
          id="login-name"
          className={styles.input}
          type="text"
          placeholder={userType === "student" ? "예: 홍길동" : "예: 김선생"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* 수업 코드 */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="login-class-code">
          수업 코드
        </label>
        <input
          id="login-class-code"
          className={styles.input}
          type="text"
          placeholder="예: CHEM2024A"
          value={classCode}
          onChange={(e) => setClassCode(e.target.value)}
          required
        />
      </div>


      <button type="submit" className={styles.buttonPrimary}>
        로그인
      </button>

      {/* 하단 회원가입 링크 */}
      <div className={styles.signupSection}>
        <p className={styles.signupPrompt}>계정이 없으신가요?</p>
        <div className={styles.signupLinks}>
          <button
            type="button"
            className={styles.linkButton}
            onClick={onSwitchToStudentSignup}
          >
            학생 회원가입
          </button>
          <span className={styles.separator}>|</span>
          <button
            type="button"
            className={styles.linkButton}
            onClick={onSwitchToTeacherSignup}
          >
            선생님 회원가입
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
