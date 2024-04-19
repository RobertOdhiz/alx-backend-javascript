export default function updateStudentGradeByCity(students, city, newGrades) {
  const filterStudents = students.filter(
    (student) => student.location === city,
  );

  const updatedStudents = filterStudentis.map((student) => {
    const updatedStudent = { ...student };
    for (const gradeInfo of newGrades) {
      if (updatedStudent.id === gradeInfo.studentId) {
        updatedStudent.grade = gradeInfo.grade;
      }
    }
    if (updatedStudent.grade === undefined) {
      updatedStudent.grade = 'N/A';
    }
    return updatedStudent;
  });

  return updatedStudents;
}
