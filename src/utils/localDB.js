// DB 초기화
export const initLocalDB = () => {
  if (!localStorage.getItem("students")) {
    localStorage.setItem("students", JSON.stringify([]));
  }

  if (!localStorage.getItem("classes")) {
    localStorage.setItem("classes", JSON.stringify([]));
  }

  if (!localStorage.getItem("experiments")) {
    localStorage.setItem("experiments", JSON.stringify([]));
  }

  if (!localStorage.getItem("currentUser")) {
    localStorage.setItem("currentUser", JSON.stringify(null));
  }
};

/* ===== GET ===== */
export const getStudents = () =>
  JSON.parse(localStorage.getItem("students") || "[]");

export const getClasses = () =>
  JSON.parse(localStorage.getItem("classes") || "[]");

export const getExperiments = () =>
  JSON.parse(localStorage.getItem("experiments") || "[]");

export const getCurrentUser = () =>
  JSON.parse(localStorage.getItem("currentUser"));

/* ===== SAVE ===== */

export const saveStudent = (student) => {
  const students = getStudents();
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
};

export const saveClass = (schoolClass) => {
  const classes = getClasses();
  classes.push(schoolClass);
  localStorage.setItem("classes", JSON.stringify(classes));
};

export const saveExperiment = (data) => {
  const exps = getExperiments();
  exps.push(data);
  localStorage.setItem("experiments", JSON.stringify(exps));
};

export const setCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const logout = () => {
  localStorage.setItem("currentUser", JSON.stringify(null));
};
