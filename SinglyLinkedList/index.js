//place of data
//reference to next node -- next

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

  //print lists
  printLists(){
    console.log(this)
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
    this.printLists()
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
    this.printLists();
  }
  
  //SHIFT
  shift(){
    if (!this.head) return undefined;
    var current = this.head;
    this.head = current.next;
    this.length--;
    this.printLists();
  }

  //UNSHIFT
  unshift(val){
   var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    this.printLists();
  }

//Get
  get(index){
    if(index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while(counter !== index){
      current = current.next;
      counter++;
    }
    return current;
  }

  //SET
  set(index, val){
    console.log(index, val)
    var node = this.get(index);
    if(node){
      node.val = val;
      return this.printLists()
    }
    return false
  }


  //INSERT
  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return this.push(val);
    if(index === 0) return this.unshift();
    var newNode = new Node(val)
    var prev = this.get(index-1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    this.printLists();
    return true;
  }
}

module.exports = {
  SinglyLinkedList
}


