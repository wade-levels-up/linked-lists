import Node from "./node.js";

export default class LinkedList {
  head = new Node("head");

  append = function (value) {
    let temp = new Node();
    this.head = temp;
  };
}

// //private static class Node<AnyType>
// {
//     private AnyType data;
//     private Node<AnyType> next;

//     public Node(AnyType data, Node<AnyType> next)
//     {
//        this.data = data;
//        this.next = next;
//     }
//  }

// Node tmp = head;

// while(tmp != null) tmp = tmp.next;
