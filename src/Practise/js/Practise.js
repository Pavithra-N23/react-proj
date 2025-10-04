import { ASC } from "./Constants";

// import { startTransition } from "react";
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
  arr.sort((a, b) => a - b);
  return arr;
}


// Sorting

// BubbleSort
export const bubbleSorting = (arr, type) => {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (type === ASC) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      } else {
        if (arr[j] < arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }

    }
  }
  console.log(arr);
  return arr;

}

export const selectionSorting = (arr, type) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min])
        min = j;
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
}

export const insertionSorting = (arr, type) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let j = i - 1;
    let key = arr[i];
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSorting([2,1,4,3], 'asc'));




// docker start
// docker exec -it image_id bash
// npm run dev -- --port=5174  ///For a specific port

