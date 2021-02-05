#!/usr/bin/env node
const program = require('commander');
const {prompt} = require('inquirer');
const {
  SinglyLinkedList
}  = require('./SinglyLinkedList/index');

const questions = [ 
  {
    type:'input',
    name:'push',
    message:'Push new node'
  },
  {
    type:'input',
    name:'pop',
    message:'Pop Node'
  },
  {
    type:'input',
    name:'shift',
    message:'Shift Node'
  },
  {
    type:'input',
    name:'unshift',
    message:'Unsift Node'
  }
]

var list = new SinglyLinkedList();

program
  .version('0.1.1')
  .description('datastructures and algorithms');

program
  .command('list')
  .alias('l')
  .description('list all the data')
  .action(() => {
    list.printLists() 
  })

program 
  .command('list')
  .alias('l')
  .description('manipulate lists')
  .action( async() => {
    const answer = await prompt(questions)
  })




program.parse(process.argv);


