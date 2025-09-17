export const reverseArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // swap
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
}


export const builInSorting = (arr) => {
  arr.sort((a, b) => a-b);
  return arr;
}