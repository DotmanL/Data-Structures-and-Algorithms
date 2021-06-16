const boo = (n) => {
  for (let i = 0; i < n.length; i++) {
    console.log('booooo!');
  }
};
boo([1, 2, 3, 4, 5]);

//Space complexity of this function is O(1)

const arrayofHiNtimes = (n) => {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
};

const ans = arrayofHiNtimes(6);
console.log(ans);

//Space complexity of this, we have created variables (let hiArray) and data structure (an array) this makes it become O(n)

//--------------------------------------------------------------------
//Twitter example
//Find 1st, Find Nth.... tweets
//oldest to most recent, compare the tweets dates

const arrayOfTweets = [
  { tweet: 'hello', date: 2012 },
  { tweet: 'afternoon', date: 2014 },
  { tweet: 'goodnight', date: 2018 },
];

const findFirstAndLast = (arrayOfTweets) => {
  let oldestPost = arrayOfTweets[0];
  let recentPost = arrayOfTweets[0];

  for (let i = 1; i < arrayOfTweets.length; i++) {
    let tweet = arrayOfTweets[i];
    if (tweet.date < oldestPost.date) {
      oldestPost = tweet;
    }
    if (tweet.date > recentPost.date) {
      recentPost = tweet;
    }
  }

  console.log(
    `The oldest post is ${oldestPost.tweet} and the newest post is ${recentPost.tweet}`
  );
};

findFirstAndLast(arrayOfTweets);
//O(n^2)

'sdsdadsererererererere'.length; // O(1)
