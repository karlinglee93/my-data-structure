const defaultCompare = (a, b) => {
	return a === b;
};

class Node {
	constructor(element) {
		this.element = element;
		this.next = undefined;
	}
}

class LinkedList {
	constructor(compareFn = defaultCompare) {
		this.count = 0;
		this.head = undefined;
		this.compareFn = compareFn;
	}

	push(element) {
		if (this.head == null) {
			this.head = new Node(element);
		} else {
			let current = this.head;
			
			while (current.next != null) {
				current = current.next;
			}
			current.next = new Node(element);
		}
		this.count++;
	}

	insert(element, index) {
		// <=哦～
		if (index >= 0 && index <= this.count) {
			const node = new Node(element);

			if (index === 0) {
				const current = this.head;
				node.next = current;
				this.head = node;
			} else {
				const previous = this.getElementAt(index - 1);
				const current = previous.next;
				previous.next = node;
				node.next = current;
			}

			this.count++;
			return true;
		}

		return false;
	}
	
	remove(element) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}

	removeAt(index) {
		// 检查越界值
		if (index >= 0 && index < this.count) {
			let current = this.head;

			if (index === 0) {
				this.head = current.next;
			} else {
				const previous = this.getElementAt(index - 1);
				current = previous.next;
				previous.next = current.next;
			}

			this.count--;
			return current.element;
		}

		return undefined;
	}

	indexOf(element) {
		let current = this.head;
		// && current != null
		for (let i = 0; i < this.count && current != null; i++) {
			if (this.compareFn(current.element, element)) {
				return i;
			}
			current = current.next;
		}

		return -1;
	}

	getElementAt(index) {
		if (index >= 0 && index < this.count) {
			let node = this.head;
			// Node 中会有undefined/null 吗?
			for (let i = 0; i < index && node != null; i++) {
				node = node.next;
			}

			return node;
		}

		return undefined;
	}

	isEmpty() {
		return this.size() === 0;
	}

	size() {
		return this.count;
	}

	getHead() {
		return this.head;
	}

	toString() {
		if (this.isEmpty()) return "";

		let objectStr = this.head.element;
		let current = this.head.next;

		for (let i = 1; i < this.size() && current != null; i++) {
			objectStr = `${objectStr}, ${current.element}`
			current = current.next;
		}

		return objectStr;
	}
}

const list = new LinkedList();
list.push(15);
list.push(10);
console.log(list.toString());