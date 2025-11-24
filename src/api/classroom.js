import { getClasses } from "../utils/localDB";

export const getClassByCode = (classcode) => {
  const classes = getClasses();
  return classes.find((c) => c.classcode === classcode);
};
