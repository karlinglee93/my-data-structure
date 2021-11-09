// Tree (BST)
// Methods, like traverse (recursion and non-recursion), etc.
import { Compare, defaultCompare } from "../UtilityFunctions";

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.root = null;
    this.compareFn = compareFn;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this._insertNode(this.root, key);
    }
  }

  preOrderTraverse(callback) {
    this._preOrderTraverseNode(this.root, callback);
  }

  inOrderTraverse(callback) {
    this._inOrderTraverseNode(this.root, callback);
  }

  postOrderTraverse(callback) {
    this._postOrderTraverseNode(this.root, callback);
  }

  // Iterative traverse
  inOrderTraverseIterative(callback) {
    this._inOrderTraverseIterativeNode(this.root, callback);
  }

  max() {}
  min() {}
  search() {}
  remove() {}

  _insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this._insertNode(node.left, key);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this._insertNode(node.right, key);
      }
    }
  }

  _preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this._preOrderTraverseNode(node.left, callback);
      this._preOrderTraverseNode(node.right, callback);
    }
  }

  _inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this._inOrderTraverseNode(node.right, callback);
    }
  }

  _postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._postOrderTraverseNode(node.left, callback);
      this._postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  _inOrderTraverseIterativeNode(node, callback) {
    let stack = [];

    while (node || stack.length) {
      while (node) {
        stack.push(node);
        node = node.left;
      }

      node = stack.pop();
      callback(node.key);
      node = node.right;
    }
  }
}