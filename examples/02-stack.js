class Stack {
    constructor(props) {
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
        if (this.isEmpty())
            return null;

        let strItems = '';
        for (const index in this.items) {
            strItems += `${this.items[index]} `;
        }
        return strItems;
    }

}

const object = new Stack();
object.push('Oscar');
object.push('Felipe');
object.push('Amado');
console.log(object);
console.log('pop', object.pop());
console.log('pop', object.pop());
console.log('peek', object.peek());
console.log(object);
console.log(object.getSize());
console.log(object.isEmpty());
console.log(object.print());
