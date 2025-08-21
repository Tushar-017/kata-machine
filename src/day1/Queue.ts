type Node<T> ={
    value: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    

    constructor() {
        this.head = this.tail = undefined; // initializing head and tail to undefined
        // this.head = this.tail = null; // alternatively, you can use null if you
        // prefer to use null instead of undefined
        // this.length = 0; // initializing length to 0
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>
        this.length++;
        if(!this.tail) { // if(!this.head){
            
                this.tail = this.head = node; // if the queue is empty, both head and tail point to the new node
                return; // no need to link the new node to the tail, as it is the only node in the queue
        }
        this.tail.next = node; // linking the new node to the end of the queue
        this.tail = node; // updating the tail to the new node
        // no need to update the head, as it remains the same

}
    deque(): T | undefined {
        if(!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head; // storing the current head to return it later
        this.head = this.head.next; // updating the head to the next node

        // freeing the old head
        head.next = undefined; // removing the reference to the next node from the old head
        if(this.length === 0) {
            this.tail = undefined; // if the queue is empty, set tail to undefined
        }
        return head.value; // returning the value of the old head
}
    peek(): T | undefined {
        return this.head?.value; // returning the value of the head without removing it
}
}