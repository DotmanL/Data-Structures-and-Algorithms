//Question (Easy) --- Two Sum
//Given an array of integers, return the indices of the two numbers that adds up to a given target

//Array of integers[1, 3, 7, 9, 2] target -- 11
//Solution should be  indices [3, 4] as those are the indexes which [9, 2] fall under.

//Step 1: Verify the constraints
//1) Are all the number postives or can there be negatives? -- All numbers are poostives
//2) Are there duplicate numbers in the array? --- No, there are no duplicates
//3) Will there always be a solution available? --- No, there may not always be a solution
//4) What do we return if there's no solution?  -- Just return null
//5) Can there be multiple pairs that add up to the target? --- No, only 1 pair of numbers will add up tot the targetPropTypes.any,

//Step 2: Write out some test cases
//[1, 3, 7, 9, 2]  target = 11, answer -- [3, 4]
//[1, 3, 7, 9, 2]  target = 25, answer -- null
// [] target =1, answer -- null
// [5] target =5, answer -- null
// [1, 6] target =7, answer- [0, 1]

//Step 3: Figure out a solution without code
//Try to add every pair of numbers to see if they equal to the target,
//take each number one by one and pair it with the each of the numbers to see if it produces the target
//Eg: using a two pointer method with the array nums = [1, 3, 7, 9, 2], target = 11. Initially,  1- P1, every other integer to the right will be tested as P2
//numberToFind = target - nums[P1] ie: 11 - 1 = 10, search the remaining integers with P2 to the right for a value of 10. if no answer is found
// shift P1 and P2 to the next integer, till we find the validd P1 and P2, we return the index of P1 and P2 which is [3, 4]

//Step 4: Write out solution in code

//Step 5: Double Check for Errors -- Spelling mistakes, variables naming, closing loops, etc..
//Brute Force Approach- Bfa

const findTwoSumBfa = (nums, target) => {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];

    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numberToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }
  return null;
};

//Step 6: Test our code with ur test cases
// let o = findTwoSumBfa([1, 3, 7, 9, 2], 11);
// let p = findTwoSumBfa([], 11);
// console.log(o);
// console.log(p);

//Step 7: Analyzing Space and Time Complexity
//In our code above, the nums array can grow in size and these may affect our space and time complexity,
//Time complexity of N in our first for Loop because as the inputs in the nums array increase, the more iterations our first for Loop
//has to do, then we have another for Loop nested in the inital for Loop that iterates over the inputs again
//hence another N, we get our Time Complexity to be O(N^2)
//Space Complexity is O(1), we are just setting variables, just pointing to integers
//We need to optimize our Time Complexity

//Step 8: Can we optimize our solution
//Compare the level of difference between our space and time complexities, look at how dreastically different from each other, try and balance the complexities
//eg: can we utilize a data structure that will consume more space and reduce our time complexity
//we are going use a hashmap (objects) to store numberToFind (ntf will be the key, index of integers that gave the ntf will be the value)
//in our inital for loop and check for p2, see code below

//Optimal Solution --- Os

const findTwoSumOs = (nums, target) => {
  const numsMap = {}; //stores our value and key pair as we iterate through the various integers in our num
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]]; //undefined until we get an integer that matches a key stored in our object
    //  console.log(numsMap);

    //undefined compared to any value will give false, else we run our else statements for undefined currentMapVal
    if (currentMapVal >= 0) {
      // console.log(currentMapVal);
      // checks our hashmap object to get our currentMapVal key  value that we have iterated over that satisfies our else statement of numberToFind
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
      //returns index of our integers as values for each numberToFind which is now our key in our stored hashmap as we iterate over our array.
    }
  }
  return null;
};

//Time Complexity of O(n), only one for loop that justs loops over every integer once
//Space Complexity of O(N), our numsMap calculates a key for every number in our nums array, doesn't get any larger than our nums input alreaady.

let c = findTwoSumOs([1, 3, 7, 9, 2], 11);
console.log(c);
// let d = findTwoSumOs([], 11);
// console.log(d);
