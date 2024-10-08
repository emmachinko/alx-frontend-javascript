export default function updateStudentGradeByCity(students, city, newGrades) {
  // Default grade value if no grade is found for a student
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      // Filter the students by city and update their grades
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        // Find the corresponding new grade for this student
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
