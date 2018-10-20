// What a linked list would look like in javascript
// Look up constructor functions if this looks confusing

// The LinkedList Object
function LinkedList() {
  this.head = null;
  this.tail = null;
}

// The Node Object
function Node(val, next, prev) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

// Ability to add to the head
LinkedList.prototype.addToHead = function(val) {
  let newNode = new Node(val,this.head, null);
  if (this.head !== null) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
}

// Ability to add to the tail
LinkedList.prototype.addToTail = function(val) {
  let newNode = new Node(val, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
}

// Ability to remove head
LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return null;
  }
  let val = this.head.val;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return val;
}