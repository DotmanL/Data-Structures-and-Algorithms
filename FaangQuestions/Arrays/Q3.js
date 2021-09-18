//Question(Hard) ---Trapping RainWater
//Given an array of integers representing an elevation map where the width of each bar is 1,
//return how much rainwater can be trapped.

//Step 1: Verify the constraints
//Do the left and right sides of the graph count as walls? --No, the sides are not walls
// Will there be negative integers? --- No, assume all integers are positive

//Step 2: Write out some test cases
//[0,1,0,2,1,0,3,1,0,1,2] correct answer is 8, check image.
//[] ans -- 0
//[3,4] ans -- 0
//[3,4,3 ] ans -- 0

//Step 3: Figure out a solution without code
// We need to use the whole array to solve the problem, figuree how much water can be stored at any given element.
//curentwater = min(maxLeft, MaxRight) - currentHeight, check images

//Step 4: Write out solution in code

//Step 5: Double Check for Errors -- Spelling mistakes, variables, closing loops, etc..
//Check above code for errors

//BruteForce Approach - Bfa
const getTrappedRainWaterBfa = (heights) => {
  let totalWater = 0;

  for (let p = 0; p < heights.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;
    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }
    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }
    const currentWater = Math.min(maxLeft, maxRight) - heights[p];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};

//Step 6: Test our code with our test cases

let a = getTrappedRainWaterBfa([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);
console.log(a);

//Step 7: Analyzing Space and Time Complexity
//Time Complexity is O(n^2), a for loop that iterates through the array with two while loops that iterates for the right
//and for the left, they touch evry single element one time
//Space Complexity - O(1), totalwater values and other values are static, the values just change but don't increase

/*Rewatch Video */
//Step 8: Can we optimize our solution
//Key Steps
//1-- Identify Pointer with lesser value
//2-- Is this pointer value greater than or equal to the max on that side, if yes -- update max on that side, if no - get water for pointer value, add to total
//3-- More pointer Inwards
//4-- repeat for other pointer
//Optimal Solution --Os

const getTrappedRainWaterOs = (heights) => {
  let left = 0,
    right = heights.length - 1,
    maxLeft = 0,
    maxRight = 0,
    total = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        total += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        total += maxRight - heights[right];
      }
      right--;
    }
  }
  return total;
};

let b = getTrappedRainWaterOs([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);
console.log(b);

//Time Complexity of O(n), we are just iterating one time over the input, either moving from left to center or right to center
//Space Comnplexity still O(1), we are still using static values to store data
