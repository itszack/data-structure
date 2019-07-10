# Binary Search Tree

A _binary search tree_ is a data structure that store items in memory. They allow fast lookup, addition and removal of items. Binary search trees keep their keys in sorted order so that lookup and other operations can use the principle of binary search. Each comparison allows the operations to skip about half of the tree so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree.

![Binary search tree](.././assets/binary-search-tree.svg)

## Psuedo Code To Create Linked List

```javascript
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
```

## Analysis

**Time Complexity**
| Access | Search | Insertion | Deletion |
| :-------: | :-------: | :-------: | :-------: |
| O(log(n)) | O(log(n)) | O(log(n)) | O(log(n)) |

**Space Complexity**

O(n)
