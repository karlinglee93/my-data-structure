// 栈
// 特点：后进先出
// 计算机中的应用：编程语言的编译器；内存中保存变量、方法调用；浏览器历史记录
// 生活中的应用：弹夹
// 解决的问题：十进制转换二进制；回溯问题

class StackArray {
	constructor() {
	  this.items = [];
	}
  
	push(item) {
	  this.items.push(item);
	}
  
	pop() {
	  this.items.pop();
	}
  
	peek() {
	  return this.items[this.items.length - 1];
	}
  
	size() {
	  return this.items.length;
	}
  
	isEmpty() {
	  return this.items.length === 0;
	}
  
	clear() {
	  this.items = [];
	}
  }
  
  export default StackArray;
  