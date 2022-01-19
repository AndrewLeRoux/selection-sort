function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = i+1; j < arr.length; j++){
      if (arr[i] > arr[j]){
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  
  
  const startTime = new Date()

  const shortInput = [];
  for (let i = 0; i < 3; ++i) {
    shortInput.push(Math.random());
  }

  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  
  for (let i = 0; i < 1000; ++i) {
    selectionSort(shortInput)
    selectionSort(longInput)
  }
  const currentTime = new Date()
  const averageRuntime = (currentTime - startTime) / 2000
  console.log(averageRuntime)

}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
