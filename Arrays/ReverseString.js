//Create a function that reverses the string below
//My Name is Oladotun

//First Solution
const reverse = (str) => {
	//check input
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'thats not good'
	}
	{
		const backwards = []
		const stringLength = str.length - 1
		for (let i = stringLength; i >= 0; i--) {
			backwards.push(str[i])
			// you can access a string as an array
		}
		console.log(backwards)
		return backwards.join('')
	}
}

reverse('My Name is Oladotun')

//solution2

const reverse2 = (str) => {
	const backwards2 = str.split('').reverse().join('')
	console.log(backwards2)
	return backwards2
}
reverse2('My Name is Oladotun')

// solution3
const reverse3 = (str) => [...str].reverse().join('')

let res = reverse3('My Name is Oladotun')

console.log(res)

//BigO is O(n) for all solutions here
