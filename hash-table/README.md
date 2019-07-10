# Hash Table

A _hash table_ is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. The hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key.

![Singly linked list](.././assets/hash-table.svg)

## Psuedo Code To Create Hash Table

```javascript
function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}
```

## Analysis

**Time Complexity**

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  N/A   |  O(n)  |   O(n)    |   O(n)   |

**Space Complexity**

O(n)
