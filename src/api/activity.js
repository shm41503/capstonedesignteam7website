export async function getActivitiesByStudent(studentId) {
  return [
    {
      studentId: studentId,
      classcode: "3AK29",
      experimentId: "magnesium_fire",
      stars: 4,
      score: 9800,
      timestamp: "2025-11-15T20:38:00Z"
    },
    {
      studentId: studentId,
      classcode: "3AK29",
      experimentId: "acid_base",
      stars: 3,
      score: 6200,
      timestamp: "2025-11-12T15:20:00Z"
    }
  ];
}
