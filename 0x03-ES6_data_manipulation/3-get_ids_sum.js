export default function getStudentIdsSum(arr) {
  let sum = 0;

  if (arr instanceof Array) {
    arr.forEach(item => {
      sum += item.id
    }); 
  };

  return sum;
};
