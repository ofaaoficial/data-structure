class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.back = 0;
    }

    enqueue(value) {
        this.items[this.back] = value;
        this.back++;
    }

    dequeue() {
        if (this.front === this.back) {
            return null;
        }

        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;

        return data;
    }

    getSize() {
        return this.back - this.front;
    }

    isEmpty() {
        if (this.getSize() === 0) {
            return true;
        }
        return false;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.front];
    }

    print() {
        if (this.isEmpty()) {
            return null;
        }

        let strItems = '';
        for (const index in this.items) {
            strItems += `${this.items[index]} `;
        }
        return strItems;
    }

}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
queue.enqueue('O');
queue.enqueue('a');
queue.dequeue(4);
console.log('peek', queue.peek());
console.log('print', queue.print());

console.log('all', queue);
