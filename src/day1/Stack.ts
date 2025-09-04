type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        // initializing head to undefined
        this.head = undefined;
        // initializing length to 0
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node; // if the stack is empty, head points to the new node
            return; // no need to link the new node to the previous head, as it is the only node in the stack
        }
        node.prev = this.head; // linking the new node to the previous head
        this.head = node; // updating the head to the new node
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (this.length === 0) {
            const head = this.head;
            this.head = undefined; // if the stack is empty, set head to undefined
            return head?.value; // returning the value of the old head
        }

        const head = this.head as Node<T>; // storing the current head to return it later¯
        this.head = head.prev;
        head.prev = undefined; // removing the reference to the previous node from the old head
        return head.value; // returning the value of the old head
    }
    peek(): T | undefined {
        return this.head?.value; // returning the value of the head without removing it
    }
}
