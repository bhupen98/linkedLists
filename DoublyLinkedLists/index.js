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
    //increament the length by 1
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


  //UNSHIFT
  unshift(val){
    //create a new Node passing value(val)
    var newNode = new Node(val)
    if(this.length === 0) {
      this.head = newNode;
      this.tail = node;
    }else{
      //if this.length > 0,
      //current head shoud point backward(<--) a newNode
      this.head.prev = newNode;
      //newNode should point fordward(-->) a current head
      newNode.next = this.head;
      //new head should be the current node
      this.head = newNode;
    }
    this.length++;
    this.printLists();
  }


  get(index){
    //if the index is less then 0 or greater then or equal to the length return
    //null
    if(index < 0 || index >= this.length) return null;
    if(index <= this.length/2){
      console.log('WORKING FROM BEGINNING')
      var count = 0;
      var current = this.head;
      while(count != index){
        current = current.next;
        count++;
      }
      return current;
    }else{
      console.log('WORKING FROM END')
      var count = 0;
      var count = this.length-1;
      var current = this.tail;
      while(count !== index){
        current = current.prev;
        count --;
      }
      return current;
    }
  }

  //SET
  set(index, val){
    var node = this.get(index);
    if(node) {
      node.val = val;
      this.printLists();
      return true
    }
    return false;
  }

  //INSERT
  insert(index, val){
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    //generate new node  and store it in newNode
    var newNode = new Node(val);
    //get before node and store it in beforeNode
    var beforeNode = this.get(index-1);
    //get after node and store it in afterNode
    var afterNode = beforeNode.next;
    //set the next node of beforeNode to be newNode
    beforeNode.next = newNode;
    //set the previous node of newNode to ne beforeNode
    newNode.prev = beforeNode;
    //set the next node of newNode to be afterNode
    newNode.next = afterNode;
    //set the previous node of afterNode to be newNode
    afterNode.prev = newNode
    this.length++;
    return true;
  }


  remove(index){
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return shift();
    if (index === this.length-1) return this.pop();
    //get the node to be removed and store it at variable removeNode
    var removeNode = this.get(index);
    //get node one step before 
    var beforeNode = removeNode.prev;
    //get node one step after 
    var afterNode = removeNode.next;
    //set one step before node's next value to be one step after Node
    beforeNode.next =afterNode;
    ///set the one step after node's prev value to be one step before Node
    afterNode.prev = beforeNode;
    //removed node next value should be null
    removeNode.next = null;
    //removed node prev value should be also null
    removeNode.prev = null;
    this.length--;
    this.printLists()
    
  }






  //print lists
  printLists(){
    console.log(this)
  }


}


module.exports = {
  DoublyLinkedLists
} 
