class Stack {
	constructor() {
	  this.items = {};
	  this.count = 0;
	}
  
	push(element) {
	  this.items[this.count] = element;
	  this.count++;
	}
  
	pop() {
	  if (this.count === 0) return undefined;
	  this.count--;
	  const item = this.items[this.count];
	  delete this.items[this.count];
	  return item;
	}
  
	size() {
	  return this.count;
	}
  
	isEmpty() {
	  return this.count === 0;
	}
  
	peek() {
	  if (this.count === 0) return undefined;
	  return this.items[this.count - 1];
	}
  
	clear() {
	  this.items = {};
	  this.count = 0;
	}
  
	toString() {
	  let result = "";
	  if (this.count > 0) {
		result = `${this.items[0]}`;
		for (let i = 1; i < this.count; i++) {
		  result += `, ${this.items[i]}`;
		}
	  }
  
	  return result;
	}
  }
  
  export default Stack;
  