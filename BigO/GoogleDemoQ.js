//Google Interview Demo Question
//Find if pairs of numbers in an array that when added up equate to a certain sum, if found return true else return false

// Naive
const hasPairWithSum = (arr, sum) => {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
};

// Better
const hasPairWithSum2 = (arr, sum) => {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
};

let ans = hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);
console.log(ans);

//Come back to this later
