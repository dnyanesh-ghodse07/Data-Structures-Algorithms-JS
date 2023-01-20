class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLikedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value){
        const newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }
}
const sll = new SinglyLikedList();
console.log(sll.append(88));
console.log(sll.append(768));
console.log(sll.append(728));

