// HashTable also known as objects in javascript, dictionaries in Python, maps in Java, hashes in Ruby.
//Contains keys and value, we use hash functions to generate a value of fixed lenght for each input

//Build hashtable from scratch

class HashTable {
	constructor(size) {
		this.data = new Array(size)
	}

	//_ indicates private property but still accesible, just caution to not access it

	_hash(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
			console.log(hash)
		}
		return hash
	}

	/// _hash - BigO O(1)

	set(key, value) {
		let address = this._hash(key)
		if (!this.data[address]) {
			this.data[address] = []
		}
		this.data[address].push([key, value])
		console.log(this.data)
		return this.data
	}
	// set-  O(1)

	get(key) {
		let address = this._hash(key)
		const currentBucket = this.data[address]
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1]
				}
			}
		} // O(1)
		return undefined
	}
	//iterate through all the keys in  our hashtable
	keys() {
		const keysArray = []

		//loop thru all elements
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				// loop again for potential collisons
				for (let j = 0; j < this.data[i].length; j++) {
					keysArray.push(this.data[i][j][0])
				}
			}
		}
		return keysArray
	}
}

const myHashTable = new HashTable(2)
myHashTable.set('grapes', 1000)
myHashTable.set('apples', 10)
myHashTable.set('oranges', 5)
// myHashTable.get('grapes')

let res = myHashTable.keys()
console.log(res)
