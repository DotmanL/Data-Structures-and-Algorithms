//Calculate nodes on several levels on binary trees

//Level 0: 2^0 = 1
//Level 1: 2^1 = 2
//Level 2: 2^2 = 4
//Level 3: 2^3 = 8

//you can find number of nodes in a tree using # of nodes 2^h -1; where h is height of tree, starts from 1
//log of nodes = steps,  log means like log 100 = 2, 10^2=100

//Binary Search Tree Implementation

class Node {
	constructor(value) {
		this.left = null
		this.right = null
		this.value = value
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}
	insert(value) {
		const newNode = new Node(value)
		if (this.root === null) {
			this.root = newNode
		} else {
			let currentNode = this.root
			while (true) {
				if (value < currentNode.value) {
					//Go left of the tree
					if (!currentNode.left) {
						currentNode.left = newNode
						return this
					}
					currentNode = currentNode.left
				} else {
					//Right
					if (!currentNode.right) {
						currentNode.right = newNode
						return this
					}
					currentNode = currentNode.right
				}
			}
		}
	}
	lookup(value) {
		if (!this.root) {
			return false
		}
		let currentNode = this.root
		while (currentNode) {
			if (value < currentNode.value) {
				currentNode = currentNode.left
			} else if (value > currentNode.value) {
				currentNode = currentNode.right
			} else if (currentNode.value === value) {
				return currentNode
			}
		}
		return false
	}

	//remove an item from a tree
	remove(value) {
		if (!this.root) {
			return false
		}
		let currentNode = this.root
		let parentNode = null
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode
				currentNode = currentNode.left
			} else if (value > currentNode) {
				parentNode = currentNode
				currentNode = currentNode.right
			} else if (currentNode.value === value) {
				//found a match, get to work

				//Option 1: No right child
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left
					} else {
						//if parent >  vurrent value, make current left child a child of parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left

							//if parent <  current value, make left child a right child of parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left
						}
					}
					//Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left
					if (parentNode === null) {
						this.root = currentNode.right
					} else {
						//if parent > current, make right child of the left the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right

							//if parent < current, make right child a right child of the parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right
						}
					}
					//Option 3: Right child that has a left child
				} else {
					//find the Right child's left most child
					let leftmost = currentNode.right.left
					let leftmostParent = currentNode.right
					while (leftmost.left !== null) {
						leftmostParent = leftmost
						leftmost = leftmost.left
					}

					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right
					leftmost.left = currentNode.left
					leftmost.right = currentNode.right

					if (parentNode === null) {
						this.root = leftmost
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftmost
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftmost
						}
					}
				}
				return true
			}
		}
	}
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(7)
tree.insert(15)
tree.insert(120)
tree.insert(12)
tree.insert(2)
console.log(tree.remove(120))
console.log(JSON.stringify(traverse(tree.root)))
//
// console.log(tree.lookup(15))

//    10
//  5       15
//2    7  12    120

function traverse(node) {
	const tree = { value: node.value }
	tree.left = node.left === null ? null : traverse(node.left)
	tree.right = node.right === null ? null : traverse(node.right)
	return tree
}
