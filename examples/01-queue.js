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
        if (this.front === this.back)
            return null;

        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;

        return data;
    }

    getSize() {
        return this.back - this.front;
    }

    isEmpty() {
        if (this.getSize() === 0)
            return true;
        return false;
    }

    peek() {
        if(this.isEmpty())
            return null;

        return this.items[this.front];
    }

    print() {
        if(this.isEmpty())
            return null;

        let strItems = '';
        for(const index in this.items) {
            strItems += `${this.items[index]} `;
        }
        return strItems;
    }

}

const object = new Queue();
object.enqueue(1);
object.enqueue(2);
object.dequeue();
object.enqueue('O');
object.enqueue('a');
object.dequeue(4);
console.log(object.peek());
console.log(object.print());

console.log(object);
