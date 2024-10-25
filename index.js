import Node from "./node.js";
import LinkedList from "./linkedList.js";

let node1 = new Node("cat");
let node2 = new Node("dog");
let node3 = new Node("lizard");

const list = new LinkedList(node1);

node1.next = node2;
node2.next = node3;

console.log(list.size()); // 3
list.append("Graham"); // Adds Graham as the last node
console.log(list.size()); // 4 (cat, dog, lizard, Graham)
console.log(list.headNode()); // data: cat, next: ...Node { data: dog }

console.log(`Tail is: ${list.tail()}`); // Graham
console.log(`The value at index 3 is: ${list.at(3)}`); // Graham

list.pop(); // Removes 'Graham' from the list

console.log(list.size()); // 3 (cat, dog, lizard)

console.log(`The value at index 2 is: ${list.at(2)}`); // lizard

console.log(list.contains("moose")); // false

console.log(`The index position of dog is: ${list.find("dog")}`); // 1

console.log(list.toString()); // ( cat ) -> ( dog ) -> ( lizard ) -> null
