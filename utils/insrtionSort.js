const {log, time, timeEnd} = console;
const {random, floor} = Math;
let unsortedArr = Array.from({length: 10}).map(() => floor(random() * 50));
let randArr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

function sort(arr) {
  let max = arr.length;
  for (let i = 1; i < max; ++i) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > temp; --j) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
};


log('unsoreted arrray:', unsortedArr);
sort(unsortedArr)
log('sortedArr', unsortedArr);

function insertionSort (arr) {
  let held;

  for (let i = 1, max = arr.length; i < max; i += 1) {
    held = arr[i];

    let j;
    for (j = i - 1; j >= 0 && held < arr[j]; j -= 1) {
      arr[j + 1] = arr[j]
    }

    arr[j + 1] = held;
  }

}

log('Unsorted Array:', unsortedArr);
insertionSort(unsortedArr);
log('Sorted Array:', unsortedArr);
