function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
};

HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.insertOrUpdate = function(key, value) {
  var index = this.hash(key);
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
};

HashTable.prototype.retrieveAll = function() {
  var allNodes = [];
  for (var i = 0; i < this.numBuckets; i++) {
    var currentNode = this.buckets[i];
    while (currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return allNodes;
};

// Create an instance of function HashTable
var HT = new HashTable(30);
console.log(HT);

var HT = new HashTable(30);
console.log(HT.hash('Becca'));

// Add new node
HT.insert('Dean', 'dean@gmail.com');
HT.insert('Megan', 'megan@gmail.com');
HT.insert('Dane', 'dane@gmail.com');

console.log(HT.buckets);

// Update node with a particular key
HT.insertOrUpdate('Dean', 'dean@gmail.com');
HT.insertOrUpdate('Megan', 'megan@gmail.com');
HT.insertOrUpdate('Dane', 'dane@gmail.com');
HT.insertOrUpdate('Dean', 'newdean@gmail.com');
HT.insertOrUpdate('Megan', 'newmegan@gmail.com');
HT.insertOrUpdate('Dane', 'newdane@gmail.com');

console.log(HT.buckets);

// Search node with a particular key
HT.insert('Dean', 'dean@gmail.com');
HT.insert('Megan', 'megan@gmail.com');
HT.insert('Dane', 'dane@gmail.com');
HT.insert('Dean', 'newdean@gmail.com');
HT.insert('Megan', 'newmegan@gmail.com');
HT.insert('Dane', 'newdane@gmail.com');

console.log(HT.get('Dean')); // newdean@gmail.com
console.log(HT.get('Megan')); // newmegan@gmail.com

// Retrive all node
HT.insert('Dean', 'dean@gmail.com');
HT.insert('Megan', 'megan@gmail.com');
HT.insert('Dane', 'dane@gmail.com');
HT.insert('Dean', 'newdean@gmail.com');
HT.insert('Megan', 'newmegan@gmail.com');
HT.insert('Dane', 'newdane@gmail.com');

console.log(HT.retrieveAll());
