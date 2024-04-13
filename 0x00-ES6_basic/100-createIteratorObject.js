export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentIndex = 0;
  let currentDepartmentIndex = 0;

  return {
    next() {
      const department = departments[currentDepartmentIndex];
      if (currentIndex < department.length) {
        return { value: department[currentIndex++], done: false };
      } else {
        currentIndex = 0;
        currentDepartmentIndex++;
        if (currentDepartmentIndex < departments.length) {
          return { value: department[currentIndex++], done: false };
        } else {
          return { done: true };
        }
      }
    }
  };
}
