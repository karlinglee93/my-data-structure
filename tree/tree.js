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

  min() {
      return this._minNode(this.root);
  }
  
  max() {
      return this._maxNode(this.root);
  }
  
  search(key) {
      return this._searchNode(this.root, key);
  }
  
  remove() {
      this.root = this._removeNode(this.root, key);
  }

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
  
  _preOrderTraverseIterativeNode(node, callback) {
    const stack = [];
    stack.push(node);
    
    while (stack.length > 0) {
        const curr = stack.pop();
        callback(curr.key);
        stack.push(cur.right);
        stack.push(cur.left);
    }
  }
  
  _postOrderTraverseIterativeNode(node, callback) {
    // to hard for me
  }
  
  _minNode(node) {
      let current = node;
      while (current != null && current.left != null) {
          current = current.left;
      }
      return current;
  }
  
  _maxNode(node) {
      let current = node;
      while (current != null && current.right != null) {
          current = current.right;
      }
      return current;
  }
  
  _searchNode(node, key) {
      if (node == null) return false;
      
      if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
          return _searchNode(node.left, key);
      } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
          return _searchNode(node.right, key);
      } else {
          return true;
      }
  }
  
  _removeNode(node, key) {
      if (node == null) {
          return node;
      }
      
      if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
          node.left = this._removeNode(node.left, key);
          return node;
      } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
          node.right = this._removeNode(node.right, key);
          return node;
      } else {
          if (node.left == null && node.right == null) {
              node = null;
              return node;
          }
          
          if (node.left == null) {
              node = node.right;
              return node;
          } else if (node.right == null) {
              node = node.left;
              return node;
          }
          
          const aux = this._minNode(node.right);
          node.key = aux.key;
          node.right = this.removeNode(node.right, aux.key);
          return node;
      }
  }
}