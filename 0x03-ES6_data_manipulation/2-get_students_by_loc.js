export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    // Filter the students by city and return the result
    return students.filter((student) => student.location === city);
  }
  // If students is not an array, return an empty array
  return [];
}
