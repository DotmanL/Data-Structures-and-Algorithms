// creating/visualizing a linkedlist in javascript
//SinglyLinkedList --- 1-->10-->5-->16

// let myLinkedList = {
// 	head: {
// 		value: 10,
// 		next: {
// 			value: 5,
// 			next: {
// 				value: 16,
// 				next: null,
// 			},
// 		},
// 	},
// }

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor(value) {
		this.head = { value: value, next: null }
		this.tail = this.head
		this.length = 1
	}

	//append
	append(value) {
		const newNode = new Node(value)
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this
	}

	//prepend
	prepend(value) {
		const newNode = new Node(value)
		newNode.next = this.head
		this.head = newNode
		this.length++
		return this
	}

	//just to print out linkedList
	printList() {
		const array = []
		let currentNode = this.head
		while (currentNode !== null) {
			array.push(currentNode.value)
			currentNode = currentNode.next
		}
		return array
	}
	//insert
	insert(index, value) {
		if (index >= this.length) {
			return this.append(value)
		}

		if (index === 0) {
			this.prepend(value)
			return this.printList()
		}
		const newNode = new Node(value)
		const leader = this.traverseToIndex(index - 1)
		const holdingPointer = leader.next
		leader.next = newNode
		newNode.next = holdingPointer
		this.lenght++
		return this.printList()
	}
	traverseToIndex(index) {
		//check params
		let counter = 0
		let currentNode = this.head
		while (counter !== index) {
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}

	//remove
	remove(index) {
		//check params
		const leader = this.traverseToIndex(index - 1)
		const unwantedNode = leader.next
		leader.next = unwantedNode.next
		this.length--
		return this.printList()
	}
	//example question
	//reverse a linked list
	// 1-->8-->99-->12 --- reverse to become 12-->99-->8-->1
	reverse() {
		if (!this.head.next) {
			return this.head
		}
		let first = this.head
		this.tail = this.head
		let second = first.next
		while (second) {
			const temp = second.next
			second.next = first
			first = second
			second = temp
		}
		this.head.next = null
		this.head = first
		return this.printList()
	}
}

const myLinkedList = new LinkedList(8)
myLinkedList.prepend(1)
myLinkedList.append(12)
myLinkedList.insert(2, 99)
myLinkedList.reverse()
// myLinkedList.remove(2)

const res = myLinkedList.printList()

console.log(res)
