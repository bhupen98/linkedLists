
## PUSHING PSEUDOCODE
  * this function should accept a value
  * create  a new node using the value passed to the function 
  * if there is no head property on the list, set the head and tail to be the
  * newly created node
  * otherwise set the tail.next property to be the newly created node
  * set the tail property to be newly created node as well
  * increment the length by one



## POPPING PSEUDOCODE
  * if there is no nodes in the list, return undefined
  * loop through the list until you reached the tail 
  * set the next property of the 2nd to last node to be the null 
  * set the tail to be the 2nd to last node 
  * decrease the length of the list by 1
  * return the value of node removed
