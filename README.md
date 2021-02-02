
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
 
