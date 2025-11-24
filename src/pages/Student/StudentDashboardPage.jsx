// src/pages/Student/StudentDashboardPage.jsx
import { useEffect, useMemo, useState } from "react";
import styles from "./StudentDashboardPage.module.css";

// 네가 이미 만들어 둔 API/유틸들에 맞춰 import 해줘
import { getActivitiesByStudent } from "../../api/experiment";
import { getCurrentUser, logout } from "../../utils/localDB";

export default function StudentDashboardPage() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = getCurrentUser(); // { id, classcode, role }

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    const data = getActivitiesByStudent(user.id) || [];
    // 최신순 정렬
    data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setActivities(data);
    setLoading(false);
  }, [user]);

  const summary = useMemo(() => {
    if (!activities.length) {
      return {
        totalStars: 0,
        totalScore: 0,
        experimentsCount: 0,
      };
    }
    const totalStars = activities.reduce(
      (sum, a) => sum + (a.stars || 0),
      0
    );
    const totalScore = activities.reduce(
      (sum, a) => sum + (a.score || 0),
      0
    );
    const experimentsCount = new Set(
      activities.map((a) => a.experiment || a.experimentId)
    ).size;

    return { totalStars, totalScore, experimentsCount };
  }, [activities]);

  const handleLogout = () => {
    logout();
    window.location.href = "/"; // 홈으로
  };

  if (!user) {
    return (
      <div className={styles.centerMessage}>
        <p>로그인 정보가 없습니다. 다시 로그인해 주세요.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.centerMessage}>
        <p>Loading student dashboard…</p>
      </div>
    );
  }

  // 실험별 카드용 그룹핑
  const experimentsMap = new Map();
  activities.forEach((a) => {
    const key = a.experiment || a.experimentId;
    if (!key) return;
    if (!experimentsMap.has(key)) {
      experimentsMap.set(key, []);
    }
    experimentsMap.get(key).push(a);
  });

  const experimentEntries = Array.from(experimentsMap.entries());

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* 상단 헤더 바 (Student Dashboard + Logout) */}
        <div className={styles.cardHeaderRow}>
          <div className={styles.cardHeaderTitle}>
            <span className={styles.cardHeaderIcon}>👤</span>
            <span>Student Dashboard</span>
          </div>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* 인사말 영역 */}
        <header className={styles.header}>
          <h1 className={styles.title}>Hello, {user.id} 👋</h1>
          <p className={styles.subTitle}>Class: {user.classcode}</p>
        </header>

        {/* 요약 카드 3개 */}
        <section className={styles.statsRow}>
          <StatCard
            label="Total Stars"
            value={summary.totalStars}
            icon="⭐"
          />
          <StatCard
            label="Total Score"
            value={summary.totalScore.toLocaleString()}
            icon="📈"
          />
          <StatCard
            label="Experiments"
            value={summary.experimentsCount}
            icon="🧪"
          />
        </section>

        {/* 실험 카드 섹션 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experiments</h2>
          {experimentEntries.length === 0 ? (
            <p className={styles.emptyText}>
              아직 진행된 실험이 없습니다. AR 앱에서 실험을 진행해 보세요!
            </p>
          ) : (
            <div className={styles.experimentsGrid}>
              {experimentEntries.map(([expKey, list]) => {
                const bestScore = Math.max(...list.map((a) => a.score || 0));
                const lastScore = list[0]?.score || 0;
                const stars = list[0]?.stars || 0;
                const name = toTitle(expKey);

                return (
                  <div className={styles.experimentCard} key={expKey}>
                    <div className={styles.experimentHeader}>
                      {/* 여기가 이미지/아이콘 들어가는 자리 */}
                      <div className={styles.experimentIconPlaceholder}>
                        {/* 나중에 여기에 <img src={...} /> 넣으면 됨 */}
                        🔬
                      </div>
                      <div>
                        <h3 className={styles.experimentName}>{name}</h3>
                        <p className={styles.experimentStars}>
                          {"⭐".repeat(stars || 0)}
                        </p>
                      </div>
                    </div>

                    <div className={styles.experimentMetaRow}>
                      <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Best</span>
                        <span className={styles.metaValue}>{bestScore}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Last</span>
                        <span className={styles.metaValue}>{lastScore}</span>
                      </div>
                    </div>

                    <button className={styles.viewButton}>
                      View Details
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* 최근 활동 테이블 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Recent Activity</h2>
          {activities.length === 0 ? (
            <p className={styles.emptyText}>
              활동 기록이 아직 없습니다. 첫 실험을 진행해보세요!
            </p>
          ) : (
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Experiment</th>
                    <th>Stars</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.slice(0, 10).map((a, idx) => (
                    <tr key={idx}>
                      <td>
                        {a.timestamp
                          ? new Date(a.timestamp).toLocaleDateString()
                          : "-"}
                      </td>
                      <td>{toTitle(a.experiment || a.experimentId)}</td>
                      <td>{"⭐".repeat(a.stars || 0)}</td>
                      <td>{a.score ?? 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>

      {/* 푸터 */}
      <footer className={styles.footer}>
        © 2025 Team 7 – AR Chemical Experiment Platform
      </footer>
    </div>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statLabel}>
        <span className={styles.statIcon}>{icon}</span>
        <span>{label}</span>
      </div>
      <div className={styles.statValue}>{value}</div>
    </div>
  );
}

function toTitle(id = "") {
  return id
    .replace(/_/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
