import React, { useState } from "react";
import styles from "./TeacherDashboardPage.module.css";
import { getCurrentUser } from "../../utils/localDB";

export default function TeacherDashboardPage() {
  const user = getCurrentUser(); // { id, classcode, role } or null

  const classCode = user?.classcode || "[Class Code]";
  const teacherName = user?.id || "";

  // Placeholder rows (Unity 데이터 들어오기 전까지)
  const placeholderRows = Array.from({ length: 3 }, (_, i) => i);

  const [showCode, setShowCode] = useState(false);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.inner}>
          {/* =============== CLASS HEADER =============== */}
          <section className={styles.classHeader}>
            <div className={styles.classHeaderTop}>
              <div>
                <h1 className={styles.classCode}>{classCode}</h1>
                {teacherName && (
                  <p className={styles.teacherName}>{teacherName}</p>
                )}
              </div>

              <button
                type="button"
                className={styles.showCodeBtn}
                onClick={() => setShowCode(true)}
              >
                코드 공유 하기
              </button>
            </div>
            <p className={styles.classSub}>
              학생들이 이 코드로 반에 참여할 수 있어요.
            </p>
          </section>

          {/* =============== SUMMARY CARDS =============== */}
          <section className={styles.summaryGrid}>
            <div className={styles.summaryCard}>
              <p className={styles.summaryLabel}>학생들</p>
              <p className={styles.summaryValue}>—</p>
            </div>
            <div className={styles.summaryCard}>
              <p className={styles.summaryLabel}>총 실험</p>
              <p className={styles.summaryValue}>—</p>
            </div>
            <div className={styles.summaryCard}>
              <p className={styles.summaryLabel}>평균 별수</p>
              <p className={styles.summaryValue}>—</p>
            </div>
            <div className={styles.summaryCard}>
              <p className={styles.summaryLabel}>최종 실험</p>
              <p className={styles.summaryValue}>—</p>
            </div>
          </section>

          {/* =============== STUDENT TABLE =============== */}
          <section className={styles.performanceSection}>
            <div className={styles.performanceHeader}>
              <h2>학생 성취 현황</h2>
              <select className={styles.filter}>
                <option value="all">모둔 실험</option>
              </select>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                      <th>학생</th>
                      <th>총 별 개수</th>
                      <th>총 점수</th>
                      <th>시도 횟수</th>
                      <th>마지막 활동일</th>
                  </tr>
                </thead>
                <tbody>
                  {placeholderRows.map((_, idx) => (
                    <tr key={idx}>
                      <td>[ ]</td>
                      <td>[ ]</td>
                      <td>[ ]</td>
                      <td>[ ]</td>
                      <td>[ ]</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* =============== FOOTER =============== */}
          <footer className={styles.footer}>
            © 2025 Team 7 – AR Chemical Experiment Platform
          </footer>
        </div>
      </div>

      {/* =============== FULL-SCREEN CLASS CODE POPUP =============== */}
      {showCode && (
        <div className={styles.codeOverlay} onClick={() => setShowCode(false)}>
          <div
            className={styles.codeDialog}
            onClick={(e) => e.stopPropagation()}
          >
            <p className={styles.codeDialogLabel}>Class Code</p>
            <p className={styles.codeDialogCode}>{classCode}</p>
            <p className={styles.codeDialogHint}>
              선생님이 만든 코드에 가입 해주세요!
            </p>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setShowCode(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
