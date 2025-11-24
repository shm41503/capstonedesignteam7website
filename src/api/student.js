import { getStudents } from "../utils/localDB";

export const getStudent = (id) => {
  const students = getStudents();
  return students.find((s) => s.id === id);
};
