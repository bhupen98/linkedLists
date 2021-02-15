# Singly Linked Lists
## Pushing Pseudocode
  * This function should accept a value
  * Create  a new node using the value passed to the function 
  * If there is no head property on the list, set the head and tail to be the
  * newly created node
  * Otherwise set the tail.next property to be the newly created node
  * Set the tail property to be newly created node as well
  * increment the length by one

## Popping Pseudocode
  * If there is no nodes in the list, return undefined
  * Loop through the list until you reached the tail 
  * Set the next property of the 2nd to last node to be the null 
  * Set the tail to be the 2nd to last node 
  * Decrease the length of the list by 1
  * return the value of node removed

## Shifting Pseudocode
  * If there is no node return undefined
  * Store a current head property in a variable
  * Set the head property to be the current head's next property
  * Decrement the lenght by 1
  * return the value of the node returned
 
## Unshifting Pseudocode
* the function should accept a value
* create a new node using a value passed to the function 
* if there is no head property on this list, set the head and tail to be the
  newly create node
* otherwise set the newly create node's next property to  be the current head
  property on the list
* set the head property on the list to  be the newly create property
* increment the length by 1
* return the linked list  
  
## Get Pseudocode
* this function should accept an index
* if the index is less than zero or greater then or equal to the length of the
  list, return null 
* loop through the list until you reached the index and return the node at that
  specific index
  
## Set Pseudocode
* this function should accept a value and index
* Use your get function to find a specific node
* if node is not found return false
* if node is found, set the value of that node to be the value passed to the
  function and return true
 
 ## Insert Pseudocode
* this function sholud accept a index and a value
* if the index is less then zero or greater then the length, return false
* if the index is the same as the length, push a new node to the end of the
  list
* if the index is 0, unshift a new node to the start of the list
* otherwise, using the get method, access the node at the index -1
* set the next property on that node to be the new node
* set the next property on the new node to be the previous next
* increment the length by 1
* return true

## Remove Pseudocode
  * this function should accept a index
  * if the index is less then zero or greater then the length, return undefined
  * if the index is the same as the length-1, pop 
  * if the index is 0, shift
  * otherwise, using the get method, access the node at the index-1
  * set next property on that node to be the next of the next node
  * decrement the length by 1
  * return the value of the node returned

## Reverse Pseudocode
* swap the head and tail 
  * create a variable called next
  * create a variable called prev
  * create a variable called node and initialize it to the head property
  * loop through the list
  * set next to be the next property on whatever node is 
  * set the next property on the node to be whatever prev is
  * set prev to be the value of the node variable
  * set the node variable to be the value of the next variable 

## Big O of Singly Linked lists
  **insertion** --> O(1)
  **Removal** --> It depends... O(1) or O(N))
  **Searching** -->   O(N)
  **Access**--> O(N)

## Important Notes
  * Singly Linked lists are an excellent alternative to arrays when insertion and
    deletion at the beginning are frequently required
  * Arrays contain a build in index whereas Linked Lists do not
  * the idea of a list data structures that consists of nodes is the foundation
    for other datastructures like stacks and queues
    
# Doubly Linked Lists
## Push Pseudocode
* Create a new node with the value passed to the function 
*   if the head property is null set the head and tail to be the newly created
    node
* otherwise, set the next property on the tail to be that node
* set the previous property on the newly created node to be  the tail
* set the tail to be a  newly create node
* increament the length by 1
