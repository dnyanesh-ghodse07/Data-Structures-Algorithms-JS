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
    prepend(value){
        const newNode = new Node(value);
        if(this.length == 0){
            return this.append(value);
        }
        newNode.next = this.head;
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
        const holdingPinter = leader.next.next;
        leader.next =  newNode;
        newNode.next = holdingPinter;
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
    reverse(){
        if(this.length === 1){
            return this;
        }

        let first = this.head;
        let second = first.next;
    }
}
const sll = new SinglyLikedList();
sll.append(88);
sll.append(768);
sll.append(7);
sll.append(28);
sll.remove(1);
console.log(sll.printList())