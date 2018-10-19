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

// Ability to add to the head with this function
LinkedList.prototype.addToHead = function(val) {
  let newNode = new Node(val,this.head, null);
  if (this.head !== null) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
}