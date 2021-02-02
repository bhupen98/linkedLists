class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // PUSH
  push(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

// POP
  pop(){
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //SHIFT
  shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
}


//new list object
var list = new SinglyLinkedList();
list.push('one')
list.push('two')
list.push('three')
list.push('four')
list.shift();
console.log(list)
