class Node{
    constructor(value){
        this.next = null;
        this.value = value;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }
        const holdingPinter = this.first;
        this.first = this.first.next;
        this.length--;
        return holdingPinter;
    }
}

const q = new Queue();

q.enqueue('A');
q.enqueue('B');
q.enqueue('C');

console.log(q);
console.log(q.dequeue());
