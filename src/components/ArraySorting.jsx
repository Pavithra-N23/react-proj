import { ASC, DESC } from "../js/Constants.js";
import { bubbleSorting, builInSorting, insertionSorting, selectionSorting } from "../js/Practise.js";

const ArraySorting = () => {
  const a = [1, 2, 6, 3, 5];
  const sortedArray = builInSorting([...a]); // spread so original not mutated
  const bubbleSortAsc = bubbleSorting([2,1,5,4], ASC);
    const bubbleSortDesc = bubbleSorting([2,1,5,4], DESC);
    const selectionSort = selectionSorting([2,1,5,3], ASC);
    const insertionSort = insertionSorting([5,1,2,9], ASC);


  return (
    <div>
      <div>
        Sorted Array: {sortedArray.join(", ")}
      </div>
      <div>
        BubbleSort ascending: {bubbleSortAsc.join(", ")};
      </div>
      <div>
        BubbleSort descending: {bubbleSortDesc.join(", ")};
      </div>
        <div>
        Selection sort descending: {selectionSort.join(", ")};
      </div>
        <div>
        Insertion sort descending: {insertionSort.join(", ")};
      </div>
    </div>
  );
}

export default ArraySorting;