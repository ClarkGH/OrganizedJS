// Create a linked list with add, find, traversal, and delete functionality

class SinglyLinkedList{

  constructor(value){
    this.next = null;
    this.value = value;
  }

  // Iterativily
  add(value){
    let currentNode = this;
    while(currentNode.next !== null) {
      currentNode = this.next;
    }

    currentNode.next = new SinglyLinkedList(value);
    return currentNode.next;
  }

  // Recursive
  find(value){
    if(this.value === value){
      return this;
    }

    if(this.next == null){
      return null;
    }

    return this.next.find(value);
  }

  delete(value){
    const predecessor = this._findPredecessor(value);
    const current = predecessor.next;
    predecessor.next = current.next;
  }

  // Recursive
  traverse(nodesValues=[]){
    nodesValues.push(this.value);
    if(this.next === null){
      return nodesValues;
    }
    return this.next.traverse(nodesValues);
  }

  reverse(nodesValues=[]){
    var node = this;
    var previous = null;

    while(node) {
      // save next or you lose it!!!
      var save = node.next;
      // reverse pointer
      node.next = previous;
      // increment previous to current node
      previous = node;
      // increment node to next node or null at end of list
      node = save;
    }
    return previous;   // Change the list head !!!
  }

  // Recursive
  _findPredecessor(value, predecessor=this){
    if(this.value === value){
      return predecessor;
    }else if (this.next !== null) {
      return this.next._findPredecessor(value, this);
    }

    return null;
  }
}


// Questions
// 1- What is the difference between classical inheritance and prototypal inheritance?
// 2- What are the pros and cons of functional programming vs object-oriented programming?

// Runner code
const head = new SinglyLinkedList('value');
head.add('value2').add('value3').add('value4');
console.log(head.traverse());
console.log(head.reverse());

// Implement reverse recursively || iteretively
// How do you think about this implementatoin
