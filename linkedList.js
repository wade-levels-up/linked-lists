import Node from "./node.js";

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append = function (value) {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(value);
  };

  prepend = function (value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  };

  size = function () {
    let count = 0;
    let node = this.head;
    while (node) {
      count += 1;
      node = node.next;
    }
    return count;
  };

  headNode = function () {
    return this.head;
  };

  tail = function () {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node.data;
  };

  at = function (index) {
    let position = 0;
    let node = this.head;
    while (node && position < index) {
      position += 1;
      node = node.next;
    }
    return node.data;
  };

  pop = function () {
    let currentNode = this.head;
    let previousNode = this.head;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
  };

  contains = function (value) {
    let isTrue = false;
    let node = this.head;
    while (node) {
      if (node.data === value) {
        isTrue = true;
      }
      node = node.next;
    }
    return isTrue;
  };

  find = function (value) {
    let position = 0;
    let node = this.head;
    while (node && node.data !== value) {
      position += 1;
      node = node.next;
    }
    return position;
  };

  toString = function () {
    let node = this.head;
    let string = "";
    while (node) {
      string += `( ${node.data} ) -> `;
      node = node.next;
    }
    string += `null`;
    return string;
  };
}
