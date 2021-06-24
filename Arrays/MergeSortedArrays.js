//mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])
//result something like this [0, 3, 4, 4, 6, 30, 31]

const mergeSortedArrays = (array1, array2) => {
	const mergedArray = []
	//Check Input
	if (array1.length === 0) {
		return array2
	}
	if (array2.length === 0) {
		return array1
	}

	let array1Item = array1[0]
	let array2Item = array2[0]
	let i = 1
	let j = 1

	while (array1Item !== undefined || array2Item !== undefined) {
		console.log(array1Item, array2Item)
		if (array2Item === undefined || array1 === undefined || array1Item < array2Item) {
			mergedArray.push(array1Item)
			array1Item = array1[i]
			i++
		} else {
			mergedArray.push(array2Item)
			array2Item = array2[j]
			j++
		}
	}

	return mergedArray
}
let res = mergeSortedArrays([0, 3, 4, 31], [0, 4, 6, 30])

console.log(res)
//time complexity O(a+b), and b are input array size

//another solution with arrays not sorted inital
//Time complexity of sorting (in this case it use quicksort) so best case complexity O(n * log n)
const mergeUnSortedArrays2 = (array1, array2) => [...array1, ...array2].sort((a, b) => a - b)

let res2 = mergeUnSortedArrays2([0, 31, 4, 3], [6, 4, 30])
console.log(res2)

///Go to leetcode and solve related arrays question in the sample array questions listed by andrei
