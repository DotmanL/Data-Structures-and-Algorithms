//***REVIEW THIS SECTION***

//Edge List simply shows the connection between 0 to 2, 2 to 3

const graph1 = [
	[0, 2],
	[2, 3],
	[2, 1],
	[1, 3],
]

//Adjacent List --- the index of the array is connected to the item, eg: index of 0 is connected to 2,   index of 1 is connected to [2,3],
// the index of the array is the value of the graph node

const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]]

//Adjacent Matrix -- node 1 is connected to 2, node 2 connected to 2,3 just like in the adjacent list

const graph = [
	[0, 0, 1, 0],
	[0, 0, 1, 1],
	[1, 1, 0, 1],
	[0, 1, 1, 0],
]
//

//Undirected Unweight Graph using adjaency list, the adjacency list using a hash table

class Graph {
	constructor() {
		this.numberofNodes = 0
		this.adjacentList = {}
	}
	addVertex(node) {
		this.adjacentList[node] = []
		this.numberofNodes++
	}
	addEdge(node1, node2) {
		//undirected Graph
		this.adjacentList[node1].push(node2)
		this.adjacentList[node2].push(node1)
	}
	showConnections() {
		const allNodes = Object.keys(this.adjacentList)
		// console.log(allNodes);
		for (let node of allNodes) {
			let nodeConnections = this.adjacentList[node]
			let connections = ''
			let vertex
			for (vertex of nodeConnections) {
				connections += vertex + ' '
			}

			console.log(node + '-->' + connections)
		}
	}
}

const myGraph = new Graph()
myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')
myGraph.addEdge('3', '1')
myGraph.addEdge('3', '4')
myGraph.addEdge('4', '2')
myGraph.addEdge('4', '5')
myGraph.addEdge('1', '2')
myGraph.addEdge('1', '0')
myGraph.addEdge('0', '2')
myGraph.addEdge('6', '5')
myGraph.showConnections()
//Answer
//0--> 1 2
//1--> 3 2 0
//2--> 4 1 0
//3--> 1 4
//4--> 3 2 5
//5--> 4 6
//6--> 5
