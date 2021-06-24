//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4];
//it should return 2

//Given an array = [2,1,1,2,3,5,1,2,4];
//it should return 1

//Given an array = [2,3,4,5];
//it should return undefined

//Brute Force 1
//this solution compares the first item with the rest, then comes to second item and compares again, has a downside with an array like this [2,5,5,2,3,5,1,2,4] -- should ideally return 5 but returns 2

const firstRecurringCharacter = (input) => {
	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			if (input[i] === input[j]) {
				return input[i]
			}
		}
	}
	return undefined
}
//Time complexity O(n^2), space complexityt - O(1)

let res = firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])
console.log(res)

//Brute Force with Fix

const firstRecurringCharacterFix = (input) => {
	for (let i = 1; i < input.length; i++) {
		for (let j = i - 1; j >= 0; j--) {
			if (input[i] === input[j]) {
				return input[i]
			}
		}
	}
	return undefined
}
//Time complexity O(n^2), space complexity - O(1)

let resFix = firstRecurringCharacterFix([2, 5, 5, 2, 3, 5, 1, 2, 4])
console.log(resFix)

//solve with hash tables
// this compares from each item on each iteration

const firstRecurringCharacter2 = (input) => {
	let map = {}
	for (let i = 0; i < input.length; i++) {
		if (map[input[i]] !== undefined) {
			return input[i]
		}
		{
			map[input[i]] = i
		}
	}

	return undefined
} // Time Complexity - O(n) but space complexity is increased //O(n)

let res2 = firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4])
console.log(res2)

//other solution

const firstRecurring = (input) => {
	const nonRecurring = []

	for (let i = 0; i < input.length; i++) {
		if (!nonRecurring.includes(input[i])) {
			nonRecurring.push(input[i])
		} else {
			return input[i]
		}
	}
}

let resOther = firstRecurring([2, 5, 5, 2, 3, 5, 1, 2, 4])
console.log(resOther)
