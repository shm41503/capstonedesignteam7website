// src/pages/SignIn/TeacherSignupForm.jsx
import React, { useState } from "react";
import styles from "./SignInPage.module.css";

/**
 * 선생님 회원가입 폼
 * POST /class
 * body: { classcode, teachername }
 */
function TeacherSignupForm({ onBackToLogin }) {
  const [teacherName, setTeacherName] = useState("");
  const [classCode, setClassCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*
    console.log("[TEACHER SIGNUP]", {
      teacherName,
      classCode,
    });
    alert("선생님 회원가입 기능은 아직 구현 중입니다 🙂");*/
    try {
      setIsLoading(true);

      const res = await fetch("/class", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          classcode: classCode,
          teachername: teacherName,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("CLASS API ERROR:", res.status, text);
        alert(`선생님 등록에 실패했습니다. (${res.status})`);
        return;
      }

      alert("선생님 등록이 완료되었습니다! 이제 로그인 화면으로 이동합니다.");
      onBackToLogin();
    } catch (err) {
      console.error("CLASS API 요청 중 오류:", err);
      alert("서버와 통신 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
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

      <button type="submit" className={styles.buttonPrimary} disabled={isLoading}>
        {isLoading ? "등록 중..." : "선생님 등록"}
      </button>



      {/* 로그인으로 돌아가기 */}
      <div className={styles.backToLogin}>
        <p className={styles.switchText}>
          이미 수업을 등록하셨나요?{" "}
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

export default TeacherSignupForm;
