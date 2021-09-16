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
//Area = lenght  * width, where length is the lower value between the two values being compared, width is the differnce between the indexes in the array.

//Step 4: Write out solution in code

//Step 5: Double Check for Errors -- Spelling mistakes, variables, closing loops, etc..

//Step 6: Test our code with ur test cases

//Step 7: Analyzing Space and Time Complexity

//Step 8: Can we optimize our solution
