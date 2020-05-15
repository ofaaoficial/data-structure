class Stack {
    constructor() {
        this.items = {};
        this.top = 0;
    }

    push(data) {
        this.top++;
        this.items[this.top] = data;
    }

    pop() {
        if (this.top) {
            const deletedData = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedData;
        }

        return null;
    }

    getSize() {
        return this.top;
    }

    isEmpty() {
        return !this.getSize();
    }

    peek() {
        return !this.isEmpty()
            ? this.items[this.top]
            : null;
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

const stack = new Stack();
stack.push('Oscar');
stack.push('Felipe');
stack.push('Amado');
console.log('all', stack);
console.log('pop', stack.pop());
console.log('pop', stack.pop());
console.log('peek', stack.peek());
console.log('all', stack);
console.log('size', stack.getSize());
console.log('isEmpty', stack.isEmpty());
console.log('print', stack.print());
