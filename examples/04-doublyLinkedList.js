class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    print() {
        let current = this.head;
        let strItems = '';
        while (current) {
            strItems += `${current.data} <-> `;
            current = current.next;
        }

        return `${strItems} (X)`;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null;
        }

        const newNode = new Node(data);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            current.prev = newNode;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            newNode.next = current;
            newNode.prev = previous;
            current.prev = newNode;
            previous.next = newNode;
        }
        this.size++;
    }

    reversePrint() {
        let current = this.tail;
        let strItems = '';
        while (current) {
            strItems += `${current.data} <-> `;
            current = current.prev;
        }

        return `${strItems} (X)`;
    }

    addToTail(data) {
        const newNode = new Node(data, null, this.tail);

        if (this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    addToHead(data) {
        const newNode = new Node(data, this.head);

        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    removeFromHead() {
        if (!this.head) {
            return null;
        }

        const valueToReturn = this.head.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.size--;
        return valueToReturn;
    }

    removeFromTail() {
        if (!this.tail) {
            return null;
        }

        const valueToReturn = this.tail.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;

        return valueToReturn;
    }

    removeData(data) {
        let current = this.head;
        let previous;

        while (current) {
            if (current.data === data) {
                if (!previous) {
                    return this.removeFromHead();
                } else if (!current.next) {
                    return this.removeFromTail();
                } else {
                    previous.next = current.next;
                    current.next.prev = previous;
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return !this.getSize();

    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addToHead(1);
doublyLinkedList.addToHead(2);
doublyLinkedList.addToTail(3);
doublyLinkedList.addToTail(4);
doublyLinkedList.addToHead(5);
doublyLinkedList.insertAt(6, 2);
console.log('removeFromHead', doublyLinkedList.removeFromHead());
console.log('removeFromHead', doublyLinkedList.removeFromHead());
console.log('removeFromTail', doublyLinkedList.removeFromTail());
console.log('removeData', doublyLinkedList.removeData(6));
console.log('isEmpty', doublyLinkedList.getSize());
console.log('getSize', doublyLinkedList.isEmpty());

console.log('print', doublyLinkedList.print());
console.log('reverse', doublyLinkedList.reversePrint());
// console.log(doublyLinkedList);
