#!/usr/bin/env node
const program = require('commander');
const {prompt} = require('inquirer');

//import linked lists
const {
  SinglyLinkedLists,
}  = require('./SinglyLinkedLists/index');
const {
  DoublyLinkedLists,
} = require('./DoublyLinkedLists/index');

// QUESTIONS
//choose linked list
const linkedListsQ = {
  type: 'list',
  name:'linkedLists',
  message:'choose a linked lists',
  choices:[
    'Singly Linked Lists',
    'Doubly Linked Lists'
  ]
}
//List action question
const actionQ = [ 
  {
    type:'list',
    name:'action',
    message:'choose a action you want to apply?',
    choices:[
      'print',
      'push',
      'pop',
      'shift',
      'unshift',
      'get',
      'set',
      'insert',
      'reverse'
    ]
  }
]

//list value question
const valQ = [
  {
    type:'input',
    name:'value',
    message:'Enter a value ?'
  }
]

//index question
const indexQ = [
  {
    type:'number',
    name:'index',
    message:' Enter a index?'
  }
]

const continueQ = [
  {
    type:'list',
    name:'continue',
    message:'Do you want to continue?',
    choices:[
      'Yes',
      'No'
    ]
  }
]

// list object
var sLists = new SinglyLinkedLists();
var dLists = new DoublyLinkedLists(); 

//watch continue or not
async function watchContinue(ll){
  const continueAns = await prompt(continueQ);
  continueAns.continue === 'Yes' ? action(ll):null;
}

//list action
async function action(ll){
  const actionAns = await prompt(actionQ);
  if ( actionAns.action === 'print'){
    ll === 'sl' ? sLists.printLists() :
      ll === 'dl' ? dLists.printLists(): null;
    watchContinue(ll);
  }else if(actionAns.action === 'push'){
    const valAns = await prompt(valQ)
    //push new Node
    ll === 'sl' ? sLists.push(valAns.value): 
      ll === 'dl' ? dLists.push(valAns.value): null;
    watchContinue(ll);
  }else if(actionAns.action === 'pop'){
    //pop Node
    ll === 'sl' ? sLists.pop():
      ll === 'dl' ? dLists.pop():null;
    watchContinue(ll)
  }else if(actionAns.action === 'shift'){
    //shift Node
    ll === 'sl' ? sLists.shift():
      ll === 'dl' ? dLists.shift(): null;
    watchContinue(ll)
  }else if(actionAns.action === 'unshift'){
    const valAns = await prompt(valQ);
    // unShift new Node
    ll === 'sl' ? sLists.unshift(valAns.value):
      ll === 'dl' ? dLists.unshift(valAns.value):null;
    watchContinue(ll);
  }else if(actionAns.action === 'get'){
    const indexAns = await prompt(indexQ);
    const node = sLists.get(indexAns.index);
    console.log(node)
    watchContinue()
  }else if(actionAns.action === 'set'){
    //get a index 
    const indexAns = await prompt(indexQ);
    //get a value
    const valAns = await prompt(valQ);
    ll === 'sl' ? sLists.set(indexAns.index, valAns.value):
      ll === 'dl' ? dLists.set(indexAns.index, valAns.value):null;
    watchContinue()
  }else if(actionAns.action === 'insert'){
    //get an index
    const indexAns = await prompt(indexQ);
    //get a value
    const valAns = await prompt(valQ);
    ll === 'sl' ? sLists.insert(indexAns.index, valAns.value):
      ll === 'dl' ? dLists.insert(indexAns.index, valAns.value):null;
    watchContinue()
  }else if(actionAns.action === 'reverse'){
    ll === 'sl' ? sLists.reverse():
      ll === 'dl' ? dLists.reverse():null;
    watchContinue()
  }
}

//program version and description
program
  .version('0.1.1')
  .description('datastructures and algorithms');

program
  .command('lists')
  .alias('l')
  .description('linked lists')
  .action(async () => {
    const linkedListAns = await prompt(linkedListsQ);
    linkedListAns.linkedLists === 'Singly Linked Lists' ? action('sl'):
      linkedListAns.linkedLists === 'Doubly Linked Lists' ? action('dl'):null;
  })

// program 
//   .command('singlylinkedlists')
//   .alias('l')
//   .description('manipulate lists')
//   .action(() => {
//     action();
//   })

// program
//   .command('doublylinkedlists')
//   .alias('d')
//   .description('doubly linked list')
//   .action(() => {
//     action()
//   })




program.parse(process.argv);


