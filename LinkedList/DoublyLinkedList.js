class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLikedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value){
        let newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }
    prepend(value){
        const newNode = new Node(value);
        if(this.length == 0){
            return this.append(value);
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value){
        if(index == 0){
            return this.prepend(value);
        }
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseAndReturnIndexNode(index - 1);
        const follower = leader.next;
        leader.next =  newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this;
    }
    pop(){
        let current = this.head;
        let prev = this.head;
        while(current.next){
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        return this;
    }
    remove(index){
        if(index >= this.length){
            return this.pop();
        }
        const leader = this.traverseAndReturnIndexNode(index - 1);
        let holdingPointer = leader.next.next;
        holdingPointer.prev = leader;
        leader.next = holdingPointer;
        this.length--;
        return this;
    }
    traverseAndReturnIndexNode(index){
        let count = 0;
        let indexNode = this.head;
        while(count != index){
            indexNode = indexNode.next;
            count++;
        }
        return indexNode;
    }
    printList(){
        const list = [];
        let head = this.head;
        while(head){
            list.push(head.value);
            head = head.next;
        }
        return list;
    }
}
const sll = new DoublyLikedList();
sll.append(88);
sll.append(768);
sll.append(234);
sll.remove(10);

console.log(sll.printList())