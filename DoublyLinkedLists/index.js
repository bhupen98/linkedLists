class Node{
  constructor(val, next, prev){
    this.val = val;
    this.next = next || null;
    this.prev = next || null;
  }
}

class DoublyLinkedLists{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //PUSH
  push(val){
    const newNode = new Node(val);
    // If the list is empty, the new node should become the head and tail
    if(!this.length){
      this.head = newNode;
      this.tail = newNode;
    } else {
      //the current tail should point forward (-->) a new node
      this.tail.next = newNode;
      //the new node should point backword (<--)to the current tail
      newNode.prev = this.tail;
      //new node should become a new tail
      this.tail = newNode;
    }
    //increament the length by 1 as 1 node is added
    this.length++;
    this.printLists();
  }

  //POP
  pop(){
    //if the list is empty, return undefined
    if(this.length === 0) return undefined;
    //store current tail in a variable, to return later
    const currentTail = this.tail;
    //if length is 1, set head and tail property to be null
    if(this.length === 1){
      this.head = null;
      this.tail = null
    }else{
      //new tail should be the current tail's prev property
      this.tail = currentTail.prev;
      //new tail should point forward (-->) a null
      this.tail.next = null;
      //current tail should point backward (<--) a null
      currentTail.prev = null;
    }
    this.length--;
    this.printLists()
    
  }

  //SHIFT
  shift(){
    //if the length is 0 or no head return undefined
    if (this.length === 0) return undefined;
    // store current head in a variable
    var currentHead = this.head;
    if (this.length === 1) {
      this.head === null;
      this.tail === null;
    }else{
      //if length > 1, 
      //new head should  be the current head's next property
      this.head = currentHead.next;
      //new head should point backward(<--) a null
      this.head.prev = null;
      //old head should point forward(-->) a null
      currentHead.next = null;
    }
    this.length--;
    this.printLists();
  }




  //print lists
  printLists(){
    console.log(this)
  }


}


module.exports = {
  DoublyLinkedLists
} 
