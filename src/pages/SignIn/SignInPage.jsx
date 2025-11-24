// src/pages/SignIn/SignInPage.jsx
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './SignInPage.module.css';
import { saveStudent, saveClass, setCurrentUser } from '../../utils/localDB';

export default function SignInPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // preselect role from ?role=student / ?role=teacher
  const searchParams = new URLSearchParams(location.search);
  const initialRole = searchParams.get('role') === 'teacher' ? 'teacher' : 'student';

  const [role, setRole] = useState(initialRole);
  const [username, setUsername] = useState('');
  const [classcode, setClasscode] = useState('');

  const handleLogin = () => {
    // save class info (can be overwritten later by Unity)
    if (classcode) {
      saveClass({
        classcode,
        name: '화학 실험 A반',
        teacherName: username || '김선생님',
      });
    }

    if (role === 'student') {
      const studentObj = { id: username, classcode };
      saveStudent(studentObj);
      setCurrentUser({ ...studentObj, role: 'student' });
      navigate('/student');
    } else {
      // teacher
      const teacherObj = { id: username, classcode, role: 'teacher' };
      localStorage.setItem('teacher', JSON.stringify(teacherObj));
      setCurrentUser(teacherObj);
      navigate('/teacher');
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sign In</h1>

        <div className={styles.roleToggle}>
          <button
            type="button"
            className={role === 'student' ? styles.active : ''}
            onClick={() => setRole('student')}
          >
            Student
          </button>
          <button
            type="button"
            className={role === 'teacher' ? styles.active : ''}
            onClick={() => setRole('teacher')}
          >
            Teacher
          </button>
        </div>

        <div className={styles.form}>
          <label className={styles.label}>
            Username
            <input
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your ID"
            />
          </label>

          <label className={styles.label}>
            Class Code
            <input
              className={styles.input}
              value={classcode}
              onChange={(e) => setClasscode(e.target.value)}
              placeholder="e.g. 3A4K29"
            />
          </label>

          <button type="button" className={styles.submit} onClick={handleLogin}>
            Login
          </button>

          <p className={styles.helper}>
            You can connect this account to the ChemAR mobile app later.
          </p>
        </div>
      </div>
    </div>
  );
}
