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
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = { value: value, next: null, prev: null }
		this.tail = this.head
		this.length = 1
	}

	//append
	append(value) {
		const newNode = new Node(value)
		newNode.prev = this.tail
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this
	}

	//prepend
	prepend(value) {
		const newNode = new Node(value)
		this.head.prev = newNode
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
		const follower = leader.next
		leader.next = newNode
		newNode.prev = leader
		newNode.next = follower
		follower.prev = newNode
		this.length++
		// console.log(this)
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
		const follower = unwantedNode.next

		leader.next = follower
		follower.prev = leader

		this.length--
		return this.printList()
	}
}

const myLinkedList = new DoublyLinkedList(8)
myLinkedList.append(12)
myLinkedList.insert(1, 99)
myLinkedList.remove(1)

// const res = myLinkedList.append(12)

// const res = myLinkedList.prepend(1)

const res = myLinkedList.printList()

console.log(res)
