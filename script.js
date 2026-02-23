const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let i =0;
  let j=0
  let res= []
  let sum =0
  while (j<arr.length){
      sum += arr[j]
      if(sum>n){
          res.push(arr.slice(i,j))
          i=j
          sum=0
      }
      else{
          j++
      }
  }
  if (i < arr.length) {
    res.push(arr.slice(i, j));
  }

  return res
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
