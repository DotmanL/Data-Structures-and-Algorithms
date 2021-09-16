//Question(Medium) --- Container with Most Water

// You are given an array of positive integers where each integer represents the height of a vertical line
// on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water that it would hold.
//eg: [1, 8, 6, 2, 9, 4,], check screenshots

//Step 1: Verify the constraints
// Does the thickness of the lines affect the area? - no, assume they take up no space
// Do the left and right sides of the graph count as walls? -- No, the sides cannot be used to form a container
// Does a higher line inside our container affect our area? -- No lines inside a container don't affect the areaPropTypes.any,

//Step 2: Write out some test cases
// [7, 1, 2, 3, 9 ]  --length will be 4 and width will be the  subtractuion the indexes between 7 and 9 which is 4 - 0 =4, area = 7*4 =28
//  [], area = 0
//  [7], area = 0
// [6, 9, 3, 4, 5, 8] assume 6 as length, 5 becomes our width we get area to be 30, assume 8 as length, 4 becomes our width we get area to be 32,

//Step 3: Figure out a solution without code
//We need to figure the greatest area, we need to check for all areas before we get to pick the best container
//Area = length  * width, where length is the lower value between the two values being compared, width is the differnce between the indexes in the array.
//iterate through all integers with two pointers, with a pointer being the minumum value of a pair then multiplied by the differneces of their indexes.
//area = min(a,b) * (bi -ai)
//Step 4: Write out solution in code

//Brute Force Approach ---Bfa

const getMaxWaterContainerBfa = (heights) => {
  let maxArea = 0;
  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};

//Step 5: Double Check for Errors -- Spelling mistakes, variables, closing loops, etc..
//Check above code for errors

//Step 6: Test our code with ur test cases

// let a = getMaxWaterContainerBfa([7, 1, 2, 3, 9]);
// console.log(a);

// let b = getMaxWaterContainerBfa([7]);
// console.log(b);

//Step 7: Analyzing Space and Time Complexity
//Time Complexity is O(n^2), we have two for loops that iteartaes N numbe of time for each loop
//Space Complexity -O(1) values are static, they don't change

//Step 8: Can we optimize our solution
//We use a technique called shifting pointers to optimize our code, get the biggest value of width by putting two pointers at the extreme ends
// the lower value between the two pointers has an effect on the area. Using this we iterate through our integers just once bringing our Time Complexity to O(n), Space Complexity still O(1)

//Optimal Solution  --Os

const getMaxWaterContainerOs = (heights) => {
  let p1 = 0;
  let p2 = heights.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    // console.log({p1, p2});
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};

let c = getMaxWaterContainerOs([7, 1, 2, 3, 9, 6, 8]);
console.log(c);

let d = getMaxWaterContainerOs([7]);
console.log(d);
