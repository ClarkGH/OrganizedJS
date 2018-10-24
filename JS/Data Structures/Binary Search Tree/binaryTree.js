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

} 


let myTree = new BinarySearchTree(50);

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