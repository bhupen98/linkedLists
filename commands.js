#!/usr/bin/env node
const program = require('commander');
const {prompt} = require('inquirer');
const {
  SinglyLinkedList
}  = require('./SinglyLinkedList/index');

// QUESTIONS
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
      'insert'
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
var list = new SinglyLinkedList();

//watch continue or not
async function watchContinue(){
    const continueAns = await prompt(continueQ);
    continueAns.continue === 'Yes' ? action():null;
}

//list action
async function action(){
  const actionAns = await prompt(actionQ);
  if ( actionAns.action === 'print'){
    list.printLists()
    watchContinue();
  }else if(actionAns.action === 'push'){
    const valAns = await prompt(valQ)
    //push new Node
    list.push(valAns.value);
    watchContinue();
  }else if(actionAns.action === 'pop'){
    //pop Node
    list.pop();
    watchContinue()
  }else if(actionAns.action === 'shift'){
    //shift Node
    list.shift();
    watchContinue()
  }else if(actionAns.action === 'unshift'){
    const valAns = await prompt(valQ);
    // unShift new Node
    list.unshift(valAns.value);
    watchContinue();
  }else if(actionAns.action === 'get'){
    const indexAns = await prompt(indexQ);
const node = list.get(indexAns.index);
    console.log(node)
    watchContinue()
  }else if(actionAns.action === 'set'){
    //get a index 
    const indexAns = await prompt(indexQ);
    //get a value
    const valAns = await prompt(valQ);
    list.set(indexAns.index, valAns.value);
    watchContinue()
  }else if(actionAns.action === 'insert'){
    //get an index
    const indexAns = await prompt(indexQ);
    //get a value
    const valAns = await prompt(valQ);
    list.insert(indexAns.index, valAns.value);
    watchContinue()
  }
}

//program version and description
program
  .version('0.1.1')
  .description('datastructures and algorithms');


program 
  .command('list')
  .alias('l')
  .description('manipulate lists')
  .action(() => {
    action();
  })




program.parse(process.argv);


