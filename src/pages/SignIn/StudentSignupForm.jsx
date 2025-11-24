// src/pages/SignIn/StudentSignupForm.jsx
import React, { useState } from "react";
import styles from "./SignInPage.module.css";

/**
 * 학생 회원가입 폼
 * POST /student
 * body: { username, classcode }
 */
function StudentSignupForm({ onBackToLogin }) {
  const [studentName, setStudentName] = useState("");
  const [classCode, setClassCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    


    /*
    console.log("[STUDENT SIGNUP]", {
      studentName,
      classCode,
      studentNumber,
      password,
    });
    alert("학생 회원가입 기능은 아직 구현 중입니다 🙂");*/
    try {
      setIsLoading(true);

      const res = await fetch("/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: studentName,
          classcode: classCode,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("STUDENT API ERROR:", res.status, text);
        alert(`학생 등록에 실패했습니다. (${res.status})`);
        return;
      }

      alert("학생 등록이 완료되었습니다! 이제 로그인 화면으로 이동합니다.");
      onBackToLogin();
    } catch (err) {
      console.error("STUDENT API 요청 중 오류:", err);
      alert("서버와 통신 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }


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

      <button type="submit" className={styles.buttonPrimary} disabled={isLoading}>
        {isLoading ? "등록 중..." : "학생 등록"}
      </button>
    

      {/* 로그인으로 돌아가기 */}
      <div className={styles.backToLogin}>
        <p className={styles.switchText}>
          이미 등록했다면{" "}
          <button
            type="button"
            className={styles.linkButton}
            onClick={onBackToLogin}
          >
            로그인으로 돌아가기
          </button>
        </p>
      </div>
    </form>
  );
}

export default StudentSignupForm;
