function bubbleSort(arr) {
  let swapped;
  do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              // Swap values
              [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
              swapped = true;
              // Do not move this console.log
              console.log(arr.join(","));
          }
      }
  } while (swapped);
}

module.exports = bubbleSort;
