export default function getStudentsByLocation(arr, city) {
  let newArr = [];

  if (arr instanceof Array) {
    newArr = arr.filter(item => item.location === city);
  }

  return newArr;
}
