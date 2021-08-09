//Stacks

//Assume we visit this sites in this sequence, google-->udemy-->youtube

//we can build stacks with either arrays or Linked Lists

//Implementation of stacks with Linked Lists

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor() {
		this.top = null
		this.bottom = null
		this.length = 0
	}
	peek() {
		return this.top
	}
	push(value) {
		const newNode = new Node(value)
		if (this.length === 0) {
			this.top = newNode
			this.bottom = newNode
		} else {
			const holdingPointer = this.top
			this.top = newNode
			this.top.next = holdingPointer
		}
		this.length++
		return this
	}
	pop() {
		if (!this.top) {
			return null
		}
		if (this.top === this.bottom) {
			this.bottom = null
		}
		this.top = this.top.next
		this.length--
		return this
	}
}

const myStack = new Stack()
// console.log(myStack.peek())
// console.log(myStack.push('google'))
// console.log(myStack.push('udemy'))
// console.log(myStack.pop())
// console.log(myStack.pop())

//Implementation of stacks with Array --arrays already have stacks
class StackArray {
	constructor() {
		this.array = []
	}
	peek() {
		return this.array[this.array.length - 1]
	}
	push(value) {
		this.array.push(value)
		return this
	}
	pop() {
		this.array.pop()
		return this
	}
}

const stackArray = new StackArray()
// console.log(stackArray.peek())
// console.log(stackArray.push('google'))
// console.log(stackArray.pop())

//
//Queues

//Assume we have a llist of people that wants to buy a ticket
//Dotun-- Ayo -- john -- Tobi
//Array -- ideally dont build queues with an array, we have to shift indexes in an array when doing operations like insertion/deletion which makes it an O(n)

//Linked Lists --with LL, jwe just chnage the head when we carry out these operations
class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.length = 0
	}

	peek() {
		return this.first
	}
	enqueue(value) {
		const newNode = new Node(value)
		if (this.length === 0) {
			this.first = newNode
			this.last = newNode
		} else {
			this.last.next = newNode
			this.last = newNode
		}
		this.length++
		return this
	}
	dequeue() {
		if (!this.first) {
			return null
		}
		if (this.first === this.last) {
			this.last = null
		}
		this.first = this.first.next
		this.length--
		return this
	}
}

const myQueue = new Queue()
// console.log(myQueue.peek())
// console.log(myQueue.enqueue('Dotun'))
// console.log(myQueue.enqueue('Ayo'))
// console.log(myQueue.enqueue('John'))
// console.log(myQueue.enqueue('tobi'))
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())

//Implement Queue using stacks

class StacksQueue {
	constructor() {
		this.first = []
		this.last = []
	}

	enqueue(value) {
		const length = this.first.length
		for (let i = 0; i < length; i++) {
			this.last.push(this.first.pop())
		}
		this.last.push(value)
		return this
	}

	dequeue() {
		const length = this.last.length
		for (let i = 0; i < length; i++) {
			this.first.push(this.last.pop())
		}
		this.first.pop()
		return this
	}
	peek() {
		if (this.last.length > 0) {
			return this.last[0]
		}
		return this.first[this.first.length - 1]
	}
}

const myStacksQueue = new StacksQueue()
console.log(myStacksQueue.peek())
// console.log(myStacksQueue.enqueue('Dotun'))
// console.log(myStacksQueue.enqueue('Ayo'))
// myStacksQueue.peek()
// console.log(myStacksQueue.dequeue())
// console.log(myStacksQueue.dequeue())
// myStacksQueue.dequeue()
// myStacksQueue.peek()
