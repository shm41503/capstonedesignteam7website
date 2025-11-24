// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

import LandingPage from "./pages/Home/LandingPage";
import SignInPage from "./pages/SignIn/SignInPage";
import StudentDashboardPage from "./pages/Student/StudentDashboardPage";
import TeacherDashboardPage from "./pages/Teacher/TeacherDashboardPage";
import DownloadPage from "./pages/Download/DownloadPage";

function App() {
  return (
    <BrowserRouter>
      {/* 공통 헤더 */}
      <Header />

      {/* 페이지들 */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/student" element={<StudentDashboardPage />} />
        <Route path="/teacher" element={<TeacherDashboardPage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>

      {/* 공통 푸터 */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
