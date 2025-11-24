import { useParams } from 'react-router-dom';
import styles from './DetailPage.module.css';

const activities = [
  {
    studentId: 'student_001',
    classcode: '3A4K29',
    experimentId: 'magnesium_fire',
    stars: 3,
    score: 1500,
    timestamp: '2025-11-15T20:38:00Z',
  },
  {
    studentId: 'student_001',
    classcode: '3A4K29',
    experimentId: 'magnesium_fire',
    stars: 4,
    score: 1800,
    timestamp: '2025-11-16T09:12:00Z',
  },
];

export default function DetailPage() {
  const { experimentId } = useParams();
  const rows = activities.filter((a) => a.experimentId === experimentId);

  return (
    <div className={styles.page}>
      <h1>{experimentId ? experimentId.replace(/_/g, ' ') : 'Experiment'}</h1>
      <p>실험별 상세 기록입니다.</p>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Stars</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((a, i) => (
              <tr key={i}>
                <td>{new Date(a.timestamp).toLocaleString()}</td>
                <td>{'⭐'.repeat(a.stars)}</td>
                <td>{a.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
