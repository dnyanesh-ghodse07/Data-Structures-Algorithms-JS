class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
       return this.top.value;
    }
    push(value){
        let newNode = new Node(value);
        if(this.length == 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this
    }  
    pop(){
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }    
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
    }
    isEmpty(){
        return this.length == 0;
    } 
}

const st = new Stack();
st.push('tutu');
st.push('pupu');
st.push('cucu');
st.push('ruru');


st.pop();
st.pop();
st.pop();
st.pop();

console.log(st.isEmpty());
console.log(st)