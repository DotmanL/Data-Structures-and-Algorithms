//Simple Sorting with the inbuilt js method

const letters = ['a', 'r', 'o', 'c', 'z', 'l', 'g']
const basket = [2, 65, 34, 2, 1, 6, 8]
console.log(letters.sort())

console.log(
	basket.sort(function (a, b) {
		return a - b
	})
)

const spanish = ['único', 'árbol', 'cosas', 'fútbol']
console.log(
	spanish.sort(function (a, b) {
		return a.localeCompare(b)
	})
)
