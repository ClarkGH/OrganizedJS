'use strict';

class BinarySearchTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (typeof val !== 'number') return 'undefined';
    if (val <= this.value) {
      if (!this.left === null) {
        this.left = new BinarySearchTree(val);
      } else {
        this.left.insert(value);
      }
    } else if (val > this.value) {
      if (!this.right === null) {
        this.right = new BinarySearchTree(val);
      } else {
        this.right.insert(value);
      }
    }
  }
} 

let myTree = new BinarySearchTree(50);
