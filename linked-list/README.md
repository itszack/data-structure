# Linked List

A _linked list_ is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains data and a reference to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing more efficient insertion or removal of nodes at arbitrary positions. A drawback of linked lists is that access time is linear.

![Singly linked list](.././assets/singly-linked-list.svg)

## Psuedo Code To Create Linked List

```javascript
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next) {
  this.value = value;
  this.next = next;
}
```

## Analysis

**Time Complexity**

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  O(n)  |  O(n)  |   O(1)    |   O(n)   |

**Space Complexity**

O(n)
