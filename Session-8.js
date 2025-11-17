// Day 8: Linked Lists
// Session Focus: Introduction to linked lists and basic operations: insertion, deletion, and traversal.
// Session Practice Questions:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // 1. Insert a node at the beginning of a linked list.
  insert(data, insertFirst = false) {
    if (insertFirst) {
      this.head = new Node(data, this.head);
      return;
    } else {
      this.insertLast(data);
    }
  }
  insertLast(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }
    let root = this.head;
    while (root.next !== null) {
      root = root.next;
    }
    root.next = new Node(data);
  }
  print() {
    let root = this.head;
    const arr = [];
    while (root !== null) {
      arr.push(root.data);
      root = root.next;
    }
    return arr.join(" -> ") + " -> " + null;
  }

  // 2. Delete the last node in a linked list.
  deleteLast() {
    if (this.head == null) {
      return;
    }
    if (this.head.next == null) {
      this.head = null;
      return;
    }
    let root = this.head;
    while (root.next.next != null) {
      root = root.next;
    }
    root.next = null;
  }

  // 3. Find the middle node of a linked list.
  middleNode() {
    let slow = this.head;
    let fast = this.head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow) {
        return "has cycle, unable to find the mid";
      }
    }
    return slow.data;
  }

  // 4. Detect a cycle in a linked list using fast and slow pointers.
  hasCycle() {
    let slow = this.head;
    let fast = this.head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow) {
        return true;
      }
    }
    return [false, this.print()];
  }

  makeCycle() {
    let temp = this.head;
    let root = this.head;
    while (root.next != null) {
      if (Math.floor(Math.random() * 101) % 2 == 0) {
        temp = root;
      }
      root = root.next;
    }
    root.next = temp;
  }

  // 5. Remove duplicates from a sorted linked list.
  removeDuplicates() {
    let root = this.head;
    while (root != null && root.next != null) {
      if (root.data == root.next.data) {
        root.next = root.next.next;
      } else {
        root = root.next;
      }
    }
  }

  // 6. Reverse a linked list iteratively.
  reverse() {
    let prev = null;
    let current = this.head;
    while (current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const list = new LinkedList();
Array.from({ length: 15 }, () => Math.floor(Math.random() * 12))
  .sort((a, b) => a - b)
  .forEach((val) => list.insert(val));
console.log(list.print());
list.removeDuplicates();
console.log(list.print());
list.reverse()
console.log(list.print());
list.insert(1);
list.insert(2, true);
list.insert(3, true);
list.insert(4);
console.log(list.print());
list.deleteLast();
list.insert(5, true);
list.insert(6, true);
list.insert(7, true);
list.insert(8, true);
console.log(list.middleNode());
console.log(list.hasCycle());
list.makeCycle();
console.log(list.hasCycle());
console.log(list)



// ? Recursion

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}
let n = 40
console.time("loop");
console.log(factorial(n));
console.timeEnd("loop");
console.time("recursion");
console.log(fact(n));
console.timeEnd("recursion");

function fibo(n) {
  let x = 1;
  let y = 0;

  for (let i = 0; i < n; i++) {
    x = x + y;
    y = x - y;
  }
  return y;
}
function fiboRec(n) {
  if (n <= 1) return n;
  return fiboRec(n - 1) + fiboRec(n - 2);
}

i = 30;
console.time("loop");
console.log(fibo(i));
console.timeEnd("loop");
console.time("recursion");
console.log(fiboRec(i));
console.timeEnd("recursion");



// // ? Post-Session Practice Questions:
// // todo 1. Merge two sorted linked lists.
function mergeTwoLists(l1, l2) {
  const dummy = new Node(0);
  let tail = dummy;
  let a = l1,
    b = l2;

  while (a !== null && b !== null) {
    if (a.data <= b.data) {
      tail.next = a;
      a = a.next;
    } else {
      tail.next = b;
      b = b.next;
    }
    tail = tail.next;
    tail.next = null; // avoid accidental cycle
  }

  if (a !== null) tail.next = a;
  if (b !== null) tail.next = b;

  return dummy.next;
}

// Create two sorted lists
let l1 = new LinkedList();
l1.insert(1);
l1.insert(3);
l1.insert(5);

let l2 = new LinkedList();
l2.insert(2);
l2.insert(4);
l2.insert(6);

// Merge
const mergedHead = mergeTwoLists(l1.head, l2.head);

// Print merged list
let result = "";
let current = mergedHead;
while (current !== null) {
  result += current.data + (current.next ? " -> " : "");
  current = current.next;
}
console.log("Merged List:", result + " -> null");


// // todo 2. Reverse a linked list recursively.
function reverseRecursive(head) { 
    if(head == null || head.next == null) {
        return head;
    }
    const newHead = reverseRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}
const list2 = new LinkedList();
list2.insert(1);
list2.insert(2);
list2.insert(3);
list2.insert(4);
console.log("Original List:", list2.print());
list2.head = reverseRecursive(list2.head);
console.log("Reversed List (Recursive):", list2.print());


// // todo 3. Check if a linked list is a palindrome.
function isPalindrome(head) { 
    if(head == null) return true;
    let slow = head;
    let fast = head;
    const stack = [];
    while (fast != null && fast.next != null) { 
        stack.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast != null) {
        slow = slow.next;
    }
    while (slow != null) {
        if (stack.pop() !== slow.data) {
            return false;
        }
        slow = slow.next;
    }
    return true;
}
const list3 = new LinkedList();
list3.insert(1);
list3.insert(2);
list3.insert(2);
list3.insert(1);
console.log("List:", list3.print());
console.log("Is Palindrome:", isPalindrome(list3.head));


// // todo 4. Remove the n-th node from the end of a linked list.
function removeNthFromEnd(head, n) {
    let dummy = new Node(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
}
const list4 = new LinkedList();
list4.insert(1);
list4.insert(2);
list4.insert(3);
list4.insert(4);
list4.insert(5);
console.log("Original List:", list4.print());
list4.head = removeNthFromEnd(list4.head, 2);
console.log("After Removing 2nd from End:", list4.print());


// // todo 5. Find the intersection point of two linked lists.
function getIntersectionNode(headA, headB) {
    if (headA == null || headB == null) return null;
    let a = headA;
    let b = headB;
    while (a !== b) {
        a = (a == null) ? headB : a.next;
        b = (b == null) ? headA : b.next;
    }
    return a;
}
const common = new Node(8, new Node(4, new Node(5)));
const listA = new LinkedList();
listA.head = new Node(4, new Node(1, common));
const listB = new LinkedList();
listB.head = new Node(5, new Node(0, new Node(1, common)));
const intersectionNode = getIntersectionNode(listA.head, listB.head);
console.log("Intersection Node:", intersectionNode ? intersectionNode.data : null);


// // todo 6. Flatten a multilevel doubly linked list.
class DoublyNode {
    constructor(data, prev = null, next = null, child = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
        this.child = child;
    }
}
function flatten(head) {
    if (head == null) return head;
    let pseudoHead = new DoublyNode(0, null, head, null);
    let prev = pseudoHead;
    const stack = [];
    stack.push(head);
    while (stack.length > 0) {
        let curr = stack.pop();
        prev.next = curr;
        curr.prev = prev;
        if (curr.next != null) {
            stack.push(curr.next);
        }
        if (curr.child != null) {
            stack.push(curr.child);
            curr.child = null;
        }
        prev = curr;
    }
    pseudoHead.next.prev = null;
    return pseudoHead.next;
}
const list5 = new LinkedList();
list5.head = new DoublyNode(1);
list5.head.next = new DoublyNode(2);
list5.head.next.prev = list5.head;
list5.head.child = new DoublyNode(3);
list5.head.child.next = new DoublyNode(4);
list5.head.child.next.prev = list5.head.child;
list5.head.next.next = new DoublyNode(5);
list5.head.next.next.prev = list5.head.next;
const flattenedHead = flatten(list5.head);
let curr = flattenedHead;
let flatResult = "";
while (curr != null) {
    flatResult += curr.data + (curr.next ? " <-> " : "");
    curr = curr.next;
}
console.log("Flattened List:", flatResult + " <-> null");


// // todo 7. Add two numbers represented by linked lists.
function addTwoNumbers(l1, l2) {
    let dummyHead = new Node(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;
    while (p != null || q != null) {
        let x = (p != null) ? p.data : 0;
        let y = (q != null) ? q.data : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new Node(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new Node(carry);
    }
    return dummyHead.next;
}
const list6a = new LinkedList();
list6a.insert(2);
list6a.insert(4);
list6a.insert(3);
const list6b = new LinkedList();
list6b.insert(5);
list6b.insert(6);
list6b.insert(4);
const sumHead = addTwoNumbers(list6a.head, list6b.head);
let sumResult = "";
let currSum = sumHead;
while (currSum != null) {
    sumResult += currSum.data + (currSum.next ? " -> " : "");
    currSum = currSum.next;
}
console.log("Sum List:", sumResult + " -> null");


// // todo 8. Partition a linked list around a value x.
function partition(head, x) {
    let beforeHead = new Node(0);
    let before = beforeHead;
    let afterHead = new Node(0);
    let after = afterHead;
    while (head != null) {
        if (head.data < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }
    after.next = null;
    before.next = afterHead.next;
    return beforeHead.next;
}
const list7 = new LinkedList();
list7.insert(1);
list7.insert(4);
list7.insert(3);
list7.insert(2);
list7.insert(5);
list7.insert(2);
console.log("Original List:", list7.print());
list7.head = partition(list7.head, 3);
console.log("Partitioned List around 3:", list7.print());


// // todo 9. Clone a linked list with random pointers.
class RandomNode {
    constructor(data, next = null, random = null) {
        this.data = data;
        this.next = next;
        this.random = random;
    }
}
function cloneRandomList(head) {
    if (head == null) return null;
    let curr = head;
    while (curr != null) {
        let newNode = new RandomNode(curr.data);
        newNode.next = curr.next;
        curr.next = newNode;
        curr = newNode.next;
    }
    curr = head;
    while (curr != null) {
        if (curr.random != null) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }
    let pseudoHead = new RandomNode(0);
    let copyCurr = pseudoHead;
    curr = head;
    while (curr != null) {
        copyCurr.next = curr.next;
        copyCurr = copyCurr.next;
        curr.next = curr.next.next;
        curr = curr.next;
    }
    return pseudoHead.next;
}
const list8 = new LinkedList();
list8.head = new RandomNode(1);
list8.head.next = new RandomNode(2);
list8.head.random = list8.head.next;
list8.head.next.random = list8.head;
const clonedHead = cloneRandomList(list8.head);
let currClone = clonedHead;
let cloneResult = "";
while (currClone != null) {
    cloneResult += `Node(${currClone.data}, Random: ${currClone.random ? currClone.random.data : 'null'})` + (currClone.next ? " -> " : "");
    currClone = currClone.next;
}
console.log("Cloned List with Random Pointers:", cloneResult + " -> null");


// // todo 10. Split a linked list into two halves.
function splitList(head) {
    if (head == null || head.next == null) return [head, null];
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast != null && fast.next != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    return [head, slow];
}
const list9 = new LinkedList();
list9.insert(1);
list9.insert(2);
list9.insert(3);
list9.insert(4);
list9.insert(5);
console.log("Original List:", list9.print());
const [firstHalf, secondHalf] = splitList(list9.head);
let firstResult = "";
let currFirst = firstHalf;
while (currFirst != null) {
    firstResult += currFirst.data + (currFirst.next ? " -> " : "");
    currFirst = currFirst.next;
}
console.log("First Half:", firstResult + " -> null");
let secondResult = "";
let currSecond = secondHalf;
while (currSecond != null) {
    secondResult += currSecond.data + (currSecond.next ? " -> " : "");
    currSecond = currSecond.next;
}
console.log("Second Half:", secondResult + " -> null");


// // todo 11. Sort a linked list using merge sort.
function sortList(head) {
    if (head == null || head.next == null) return head;
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast != null && fast.next != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    const l1 = sortList(head);
    const l2 = sortList(slow);
    return mergeTwoLists(l1, l2);
}
const list10 = new LinkedList();
Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  .forEach((val) => list10.insert(val));
console.log("Unsorted List:", list10.print());
list10.head = sortList(list10.head);
console.log("Sorted List:", list10.print());
