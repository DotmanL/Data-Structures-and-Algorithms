//**Finish this */

// camelCase looksLikeThis
// Input:
// A series of strings with one fragment on each line of input. All characters will be from the ASCII character set.

// Output:
// A single line with the inputs assembled in Camel Case

// Test 1
// Test Input
// Download Test 1 Input
// Apple
// One

// Apple
// TWO

// APPLE
// three
// Expected Output
// Download Test 1 Input
// appleOne appleTwo appleThree

const camelCase = (str) => {
	if (typeof str !== 'string') {
		return 'not string'
	} else {
		//get first word in line
		let firstWord = str.split('\n')[0]
		let firstWordCamel = firstWord.toLowerCase()
		let stringLength = str.split('\n').length
		console.log(stringLength)
		console.log(str)
		console.log(firstWord)

		for (let i = 1; i < stringLength; i++) {
			console.log(i)
			let otherWords = str.split('\n')[i]

			//capitalize first string in each otherWord
			let transOtherWord = otherWords

			console.log(otherWords)
			let sent = firstWordCamel.concat(otherWords)
			return sent
		}
	}
}

console.log(
	camelCase(`Apple
One 
Guy
Orange`)
)
