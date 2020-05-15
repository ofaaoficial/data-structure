class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }
        this.size++;
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
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }

    isEmpty() {
        return !this.size;
    }

    getSize() {
        return this.size;
    }

    print() {
        if (this.isEmpty()) {
            return null;
        }

        let current = this.head;
        let strItems = '';

        while (current) {
            strItems += `${current.data} -> `;
            current = current.next;
        }
        strItems += '(X)';
        return strItems;
    }

    removeElement(data) {
        let current = this.head;
        let previous;

        while (current) {
            if (current.data === data) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current;
            }
            previous = current;
            current = current.next;
        }

        return null;
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null;
        }

        let current = this.head;
        let previous;

        if (index === 0) {
            this.head = current.next;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }
}


const node = new Node('holi');
console.log('node', node);

const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(3);
linkedList.add(56);
linkedList.add(44);
linkedList.insertAt(99, 1);
linkedList.removeElement(44);
console.log('removeFrom', linkedList.removeFrom(3));

console.log('isEmpty', linkedList.isEmpty());
console.log('linkedList', linkedList);
console.log('size', linkedList.getSize());
console.log('print', linkedList.print());
