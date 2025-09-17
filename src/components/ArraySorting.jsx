import { builInSorting } from "../js/Practise.js";

const ArraySorting = () => {
  const a = [1, 2, 6, 3, 5];
  const sortedArray = builInSorting([...a]); // spread so original not mutated

  return (
    <div>
      Sorted Array: {sortedArray.join(", ")}
    </div>
  );
}

export default ArraySorting;