import { getExperiments, saveExperiment } from "../utils/localDB";

// student 활동 불러오기
export const getActivitiesByStudent = (id) => {
  const all = getExperiments();
  return all.filter((a) => a.username === id);
};

// Unity에서 save할때 호출될 함수
export const saveActivity = (data) => {
  saveExperiment(data);
};
