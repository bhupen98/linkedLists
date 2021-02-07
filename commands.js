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
      'unshift'
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

const continueQ = [
  {
    type:'list',
    name:'continue',
    message:'Do you want to apply more action to the list?',
    choices:[
      'Yes',
      'No'
    ]
  }
]

//global variables
var list = new SinglyLinkedList();

//watch continue or not
async function watchContinue(){
    const continueAns = await prompt(continueQ);
    continueAns.continue === 'Yes' ? action():null;
}

async function action(){
  const actionAns = await prompt(actionQ);
  if ( actionAns.action === 'print'){
    list.printLists()
    watchContinue();
  }else if(actionAns.action === 'push'){
    const valAns = await prompt(valQ)
    //push new value
    list.push(valAns.value);
    //add more value or quit
    watchContinue();
  }else if(actionAns.action === 'pop'){
    list.pop();
    watchContinue()
  }else if(actionAns.action === 'shift'){
    list.shift();
    watchContinue()
  }else if(actionAns.action === 'unshift'){
    const valAns = await prompt(valQ);
    list.unshift(valAns.value);
    watchContinue();
  }
}

program
  .version('0.1.1')
  .description('datastructures and algorithms');


program 
  .command('list')
  .alias('l')
  .description('manipulate lists')
  .action(() => {
    action()
  })




program.parse(process.argv);


