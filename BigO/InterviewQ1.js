// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

//Brute Force Solution - not the most efficeint way of solving this problem, BigO -O(a*b) => O(n^2)
// This approach is not the best as it uses nested loops, which results  in O(n^2)

const containsCommonItems = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

// O(1) --Space Complexity
// let ans = containsCommonItems(array3, array4);
// console.log(ans);

//--------------------------------------------------------------------
//Better Solution
//Convert array3 to an object

const containsCommonItems2 = (arr1, arr2) => {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map);
  // loop through second array and check if item in second array exists on created object.

  for (let j = 0; j < arr1.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
};

// We can modularize the codes to seperate functions

// O(n) Space Compleixty-- this solution is more heavy in terms of space
// let ans = containsCommonItems2(array3, array4);
// console.log(ans);

//ensure to name your variables and parameters properly
// O(a+b) => O(n), Time Complexity is better even for large arrays
// if we dont have a second parameter (if we have null in place of array4), code breaks, test for errors and tell the interviewer waht you will do

//--------------------------------------------------------------------

//Another solution using javascript methods
// This is more readable

const containsCommonItems3 = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};

let ans = containsCommonItems3(array3, array4);
console.log(ans);
