function isSorted(arr){
  let count = 0;
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > arr[i + 1]){
      count++;
    }
  }
  
  return count === 0;

}

console.log(isSorted([2,4,5,1]));