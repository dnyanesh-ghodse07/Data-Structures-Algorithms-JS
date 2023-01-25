class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.array = [];
    }
    peek(){
       return this.array[this.array.length - 1];
    }
    push(value){
        this.array.push(value);
        return this.array;
    }  
    pop(){
        this.array.pop();
    }
    isEmpty(){
        return this.array.length == 0;
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