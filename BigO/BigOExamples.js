//BIG O EXAMPLES

//Arrays
const player = ['shaw'];
const squad = [
  'degea',
  'bissaka',
  'lindelof',
  'maguire',
  'shaw',
  'mctominay',
  'fred',
  'fernandes',
  'pogba',
  'cavani',
  'greenwood',
];
const large = new Array(100).fill('shaw');

//Linear Time - O(n)

const findPlayers = (array) => {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'shaw') {
      console.log('Found SHAW!!');
    }
  }
  //let t1 = performance.now();
  //console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
};

// findPlayers(large);

// This function has a big O notation of O(n) --> Linear time, for 5 items in an array, we have 5 operations hence giving us a linear relationship between operations and elements.

//another way of looping
const findPlayersLoop = (array) => {
  array.forEach((item) => {
    if (item === 'shaw') {
      console.log('Found SHAW!!');
    }
  });
};

// findPlayersLoop(squad);

//another way of looping again
const findPlayersLoopAgain = (array) => {
  for (let item of array) {
    if (item === 'shaw') {
      console.log('Found SHAW!!');
    }
  }
};

// findPlayersLoopAgain(squad);

//--------------------------------------------------------------------

// Constant Time O(1)

const compressPlayers = (squad) => {
  console.log(squad[0]);
};

//compressPlayers(squad);

// This function has a big O notation of O(1) --> Constant time

const compressPlayersTwice = (squad) => {
  console.log(squad[0]); // O(1)
  console.log(squad[1]); // O (1)
};

compressPlayersTwice(squad); // Big 0 adds as 0(2) but still constant time and still noted as O(1)

//--------------------------------------------------------------------

//BIG O RULES
// 1) WORST CASE -- For example, you can use a break statement to reduce th number of time the codes run but still varies in a case where the searched item is the last in the array

const findPlayersNew = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'shaw') {
      console.log('Found SHAW!!');
      break;
    }
  }
};

//findPlayersNew(squad)

//--------------------------------------------------------------------

// 2) Remove Constants
//Note we are not calculating the Big O for the constants

const printFirstItemThenFirstHalfThenSayHi100Times = (items) => {
  console.log(items[0]); // O(1)

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++; // O(n/2)
  }

  for (var i = 0; i < 100; i++) {
    // O(100)
    console.log('hi');
  }
};

//BIG O = O(1 + n/2 + 100) => O(n + 1) then becomes O(n)

//--------------------------------------------------------------------

// 3) Different terms from inputs
const compressPlayersAgain = (squad, large) => {
  squad.forEach((squad) => {
    console.log(squad);
  });
  large.forEach((squad) => {
    console.log(squad);
  });
};

// compressPlayersAgain(squad, large);
// O(a + b) => O(2n) => we can drop the constant => O(n)

//Log all pairs of array --- Quadratic Time

const letters = ['a', 'b', 'c', 'd', 'e'];

const logAllPairsOfArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

//logAllPairsOfArray(letters);

//For nested loops, we multiply such that O(n*n) becomes O(n^2) -Quadratic Time, eg of compressPlayersAgain use +, loops are not nested

//--------------------------------------------------------------------
// 4) Drop Non Dominants
const printAllNumbersThenAllPairSums = (numbers) => {
  console.log('these are the numbers:'); // once --> O(1)
  numbers.forEach(function (number) {
    // 5 times --> O(n)
    console.log(number); // 5 times --> O(n)
  });

  console.log('and these are their sums:'); // once --> O(1)
  numbers.forEach(function (firstNumber) {
    // 5 times --> O(n)
    numbers.forEach(function (secondNumber) {
      // 25 times -->  O(n^2)
      console.log(firstNumber + secondNumber); // 25 times -->  O(n^2)
    });
  });
};

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // once --> O(1)

// Final: O(3 + 3n + 2n^2) --> O(n + n^2) --> O(n^2)
// we drop n as non dominant => O(n^2)

//Example-- drop non demoninant below
// O(x^2+3x+100+x/2), substitute x with assumeed numbers
// we get the most dominant in terms of scalability as O(x^2)
