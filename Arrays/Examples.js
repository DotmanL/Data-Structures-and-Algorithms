const strings = ['a', 'b', 'c', 'd']

//push - add to end of array
strings.push('e') //O(1) can be O(n) due to the operation of copying the dynamic array and appending new items to it

//pop- remove from end of array
strings.pop()
strings.pop() //O(1)

//unshift - add item to start of array
strings.unshift('x') //O(n)

//splice -add item and can also delete after particular index in an array

strings.splice(2, 0, 'newItem') // O(n/2) --- O(n)

console.log(strings)

//--------------------------------------------------------------------
//Static vs Dynamic Arrays
//Static arrays are fixed in size-- mainly in c++ and some other languages
//Dynmaic Arrays  allows us to copy and rebuild arrays in a new location- arrays in Javascript are dynamic
