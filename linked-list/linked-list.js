function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.indexOf = function(value) {
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) indexes.push(currentIndex);
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
};

// Create an instance of function LinkedList
var ll = new LinkedList();
console.log(ll);

// Create an instance of function Node
var node1 = new Node(100, 'node2', null);
console.log(node1);

// Add new node from the head
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);

console.log(ll);

// Add new node from the tail
ll.addToTail(10);
ll.addToTail(20);
ll.addToTail(30);

console.log(ll);
// Traverse through linked list
console.log(ll.tail.prev);
console.log(ll.tail.prev.prev);

// Remove the head node
ll.addToHead(1000);
ll.addToHead(2000);
ll.addToTail(3000);
// Remove current head 2000
console.log(ll.removeHead());
// Remove current head 1000
ll.removeHead();
console.log(ll.removeHead());

// Remove the tail node
ll.addToHead('one');
ll.addToHead('two');
ll.addToHead('three');
// Remove current tail node 'one'
console.log(ll.removeTail());

// Search node with a particular value
ll.addToHead(123);
ll.addToHead(70);
ll.addToHead('Hello');
ll.addToTail(19);
ll.addToTail('World');
ll.addToTail(20);
// Search value 70
console.log(ll.search(70));
// Search value 10
console.log(ll.search(10));

// Index nodes with a particular value
ll.addToTail(1);
ll.addToTail(5);
ll.addToTail(3);
ll.addToTail(5);
ll.addToTail(8);
ll.addToTail(7);
ll.addToTail(5);
// Display indexes of nodes with value 5
console.log(ll.indexOf(5));
