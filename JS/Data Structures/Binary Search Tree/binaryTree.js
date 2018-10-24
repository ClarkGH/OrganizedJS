'use strict';

class BinarySearchTree {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }

  insert(val) {
    if (typeof val !== 'number') {
      return
    }
    if (val <= this.val) {
      if (!(this.left instanceof BinarySearchTree)) {
        this.left = new BinarySearchTree(val);
      } else {
        this.left.insert(val);
      }
    } else if (val > this.val) {
      if (!(this.right instanceof BinarySearchTree)) {
        this.right = new BinarySearchTree(val);
      } else {
        this.right.insert(val);
      }
    }
  }

  contains(val) {
    debugger;
    if (this.val === val) {
      return true;
    } else if (val < this.val && this.left instanceof BinarySearchTree) {
      return this.left.contains(val);
    } else if (val > this.val && this.right instanceof BinarySearchTree) {
      return this.right.contains(val);
    } else {
      return false;
    }
  }

} 


let myTree = new BinarySearchTree(50);

// Test cases
myTree.insert(10);
myTree.insert(15);
myTree.insert(20);
myTree.insert(66);
myTree.insert(99);
myTree.insert(1);
myTree.insert(100);
myTree.insert(76);
myTree.insert(22);
myTree.insert(33);
myTree.insert(56);
myTree.insert(4);
myTree.contains(100); //returns true
myTree.contains(1); //returns true
myTree.contains(100000000); //returns false