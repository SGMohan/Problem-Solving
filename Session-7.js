// Day 7: Stacks, Queues & Recursion
// Session Focus: Stack and queue operations, recursive problem-solving techniques.
// Session Practice Questions:

// 1. Implement a stack using an array.
class Stack { 
    constructor(size = +Infinity) {
        console.log("Stack is being constructed");
        this.stack=[];
        this.size = size;
        this.top = -1;
        console.log("Stack constructed");
    }
    isFull() { 
        return this.top + 1 === this.size;
    }
    isEmpty() { 
        return this.top === -1;
    }
    push(element) {
        if (this.isFull()) {
            throw new Error("Stack Overflow");
        }
        this.top++;
        this.stack[this.top] = element;
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack Underflow");
        }
        let element = this.stack[this.top];
        delete this.stack[this.top];
        this.top--;
        return element;
    }
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack Underflow");
        }
        return this.stack[this.top];
    }
}
// const stack = new Stack(5);// we are trying to create an object for the class Stack
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// // stack.push(60);
// console.log(stack);
// console.log(stack.pop()); // 50
// console.log(stack.pop()); // 40
// console.log(stack.pop()); // 30
// console.log(stack.pop()); // 20
// console.log(stack.pop()); // 10
// // console.log(stack.pop()); // 30


// 2. Check for balanced parentheses in an expression.
function isBalanced(str = "") {
    const stack = new Stack();
    const obj = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for(const char of str) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else if (char === ")" || char === "}" || char === "]") {
            if (obj[stack.pop()] !== char) {
                return false;
            } 
        }
    }
    return stack.isEmpty();
} 
const testCases = [
  { input: "(a(b)c{[d]e})", expected: true },
  { input: "([a+b]*{c/d})", expected: true },
  { input: "([)]", expected: false },
  { input: "{[a+b]-[c/d]}", expected: true },
  { input: "a(b+c]*[d)e", expected: false },
  { input: "", expected: true },
  { input: "abc", expected: true }, // no parentheses
  { input: "({[a+b]})", expected: true },
  { input: "([", expected: false },
  { input: "[{()]}[", expected: false },
];

let passed = 0;
let failed = 0;

testCases.forEach((testCase, index) => {
  const result = isBalanced(testCase.input);
  if (result === testCase.expected) {
    passed++;
  } else {
    failed++;
    console.log(
      `Test case ${index + 1} failed. Input: "${testCase.input}", Expected: ${
        testCase.expected
      }, Got: ${result}`
    );
  }
});

console.log(`Passed: ${passed} / ${testCases.length}`);
console.log(`Failed: ${failed} / ${testCases.length}`);


// 3. Reverse a string using a stack.
function reverseString(str = "") { 
    const stack = new Stack();
    for (const char of str) {
        stack.push(char);
    }
    const revArr = [];
    while (!stack.isEmpty()) {
        revArr.push(stack.pop());
    }
    return revArr;
}
console.log(reverseString("Hello, World!")); // !dlroW ,olleH


// 4. Implement a queue using two stacks.
function queue() {
  const stack1 = new Stack();
  const stack2 = new Stack();

  return {
    enqueue: (elem) => {
      stack1.push(elem);
    },
    dequeue: () => {
      if (stack2.isEmpty()) {
        while (!stack1.isEmpty()) {
          stack2.push(stack1.pop());
        }
      }
      if (stack1.isEmpty() && stack2.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return stack2.pop();
    },
  };
}
const myQueue = queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
myQueue.enqueue(4);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());

// 5. Find the next greater element for each array element.
function nextGreater(arr = []) {
    const res = new Array(arr.length).fill(-1);
    const stack = new Stack();
    for (let i = 0; i < arr.length; i++) {
        while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) {
            const index = stack.pop();
            res[index] = arr[i];
        }
        stack.push(i);
    }
    return res;

  // this not a better solution, it achieve a time complexity
  //     for (let i = 0; i < arr.length; i++) {
  //         let greaterElement = -1;
  //         for (let j = i + 1; j < arr.length; j++) {
  //             if (arr[j] > arr[i]) {
  //                 greaterElement = arr[j];
  //                 break;
  //             }
  //         }
  //         arr[i] = greaterElement;
  //     }
  //   return arr;
}
console.log(nextGreater([5,1,2,4,6,5])); // [6,2,4,6,-1,-1]



// 6. Design a browser’s forward and backward navigation (stack-based).
function browserHistory() {
  const history = new Stack();
  const forwardHistory = new Stack();
  return {
    visit: (page) => {
      history.push(page);
      while (!forwardHistory.isEmpty()) forwardHistory.pop();
      return "currently viewing " + history.peek();
    },
    backward: () => {
      if (history.isEmpty()) {
        return "Youre still in home page";
      }
      const elem = history.pop();
      if (history.isEmpty()) {
        history.push(elem);
        return "No Page is visited";
      }
      forwardHistory.push(elem);
      return "currently viewing " + history.peek();
    },
    forward: () => {
      if (forwardHistory.isEmpty()) {
        return "No Page is visited";
      }
      history.push(forwardHistory.pop());
      return "currently viewing " + history.peek();
    },
    current: () => {
      if (history.isEmpty()) {
        return "No Page is visited";
      }
      return "currently viewing " + history.peek();
    },
  };
}
const browser = browserHistory();
console.log(browser.visit("A"));
console.log(browser.backward());
console.log(browser.visit("B"));
console.log(browser.visit("C"));
console.log(browser.backward());
console.log(browser.forward());
console.log(browser.visit("D"));
console.log(browser.forward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.current());


// // ? Post-Session Practice Questions:
// // 1. todo Implement a circular queue.
class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.arr = new Array(capacity);
    this.front = 0;
    this.rear = -1;
    this.count = 0;
  }

  isEmpty() { return this.count === 0; }
  isFull() { return this.count === this.capacity; }
  size() { return this.count; }

  enqueue(val) {
    if (this.isFull()) throw new Error("Queue Overflow");
    this.rear = (this.rear + 1) % this.capacity;
    this.arr[this.rear] = val;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue Underflow");
    const val = this.arr[this.front];
    this.arr[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.count--;
    return val;
  }

  peek() {
    if (this.isEmpty()) throw new Error("Queue Empty");
    return this.arr[this.front];
  }
}

const cq = new CircularQueue(4);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
console.log(cq.dequeue()); // 1
cq.enqueue(4);
// cq.enqueue(6); // Error: Queue Overflow


// // todo 2. Sort a stack using recursion.
class SimpleStack {
  constructor() {
    this.data = [];
    this.top = -1;
  }
  isEmpty() { return this.top === -1; }
  push(x) { this.top++; this.data[this.top] = x; }
  pop() {
    if (this.isEmpty()) throw new Error("Underflow");
    const v = this.data[this.top];
    this.data[this.top] = undefined;
    this.top--;
    return v;
  }
  peek() {
    if (this.isEmpty()) throw new Error("Empty");
    return this.data[this.top];
  }
  size() { return this.top + 1; }
}
// Insert element into sorted stack recursively
function insertSorted(stack, value) {
  if (stack.isEmpty() || stack.peek() <= value) {
    stack.push(value);
    return;
  }
  const top = stack.pop();
  insertSorted(stack, value);
  stack.push(top);
}
// Sort stack so largest on top (ascending bottom -> top)
function sortStack(stack) {
  if (stack.isEmpty()) return;
  const top = stack.pop();
  sortStack(stack);
  insertSorted(stack, top);
}
const s = new SimpleStack();
s.push(3); s.push(1); s.push(4); s.push(2);
sortStack(s);
while (!s.isEmpty()) console.log(s.pop()); // prints 4,3,2,1 (largest first)


// // todo 3. Find the maximum element in a stack in constant time.
class MaxStack {
  constructor() {
    this.data = []; // stores values
    this.maxs = []; // parallel: maxs[i] = max up to index i
    this.top = -1;
  }
  push(x) {
    this.top++;
    this.data[this.top] = x;
    if (this.top === 0) this.maxs[this.top] = x;
    else {
      const prevMax = this.maxs[this.top - 1];
      this.maxs[this.top] = prevMax >= x ? prevMax : x;
    }
  }
  pop() {
    if (this.top === -1) throw new Error("Underflow");
    const v = this.data[this.top];
    this.data[this.top] = undefined;
    this.maxs[this.top] = undefined;
    this.top--;
    return v;
  }
  getMax() {
    if (this.top === -1) throw new Error("Empty");
    return this.maxs[this.top];
  }
  isEmpty() { return this.top === -1; }
}

const ms = new MaxStack();
ms.push(2); ms.push(5); ms.push(1);
console.log(ms.getMax()); // 5
ms.pop();
console.log(ms.getMax()); // 5

// // todo 4. Design a data structure supporting min, max, push, and pop in constant time.
class MinMaxStack {
  constructor() {
    this.data = []; this.top = -1;
    this.mins = []; // mins[i] = min up to i
    this.maxs = []; // maxs[i] = max up to i
  }
  push(x) {
    this.top++;
    this.data[this.top] = x;
    if (this.top === 0) {
      this.mins[this.top] = x;
      this.maxs[this.top] = x;
    } else {
      this.mins[this.top] = this.mins[this.top - 1] <= x ? this.mins[this.top - 1] : x;
      this.maxs[this.top] = this.maxs[this.top - 1] >= x ? this.maxs[this.top - 1] : x;
    }
  }
  pop() {
    if (this.top === -1) throw new Error("Underflow");
    const v = this.data[this.top];
    this.data[this.top] = undefined;
    this.mins[this.top] = undefined;
    this.maxs[this.top] = undefined;
    this.top--;
    return v;
  }
  getMin() {
    if (this.top === -1) throw new Error("Empty");
    return this.mins[this.top];
  }
  getMax() {
    if (this.top === -1) throw new Error("Empty");
    return this.maxs[this.top];
  }
  isEmpty() { return this.top === -1; }
}
const mm = new MinMaxStack();
mm.push(3); mm.push(1); mm.push(4);
console.log(mm.getMin(), mm.getMax()); // 1 4
mm.pop();
console.log(mm.getMin(), mm.getMax()); // 1 3


// // todo 5. Reverse the first k elements of a queue.
function reverseFirstK(queue, k) {
  if (k < 0 || k > queue.size()) throw new Error("Invalid k");
  const stack = new SimpleStack();
  // dequeue first k into stack
  for (let i = 0; i < k; i++) stack.push(queue.dequeue());
  // enqueue stack contents back (they come out reversed)
  while (!stack.isEmpty()) queue.enqueue(stack.pop());
  // move the rest (size-k) items from front to back to restore order
  const rest = queue.size() - k;
  for (let i = 0; i < rest; i++) queue.enqueue(queue.dequeue());
}
// reuse CircularQueue (which has enqueue/dequeue/size)
const q = new CircularQueue(10);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
reverseFirstK(q, 3);
// Now queue order is 3,2,1,4,5
while (!q.isEmpty()) console.log(q.dequeue());


// // todo 6. Implement a priority queue.
class MinPriorityQueue {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  parent(i) { return ((i - 1) / 2) | 0; }
  left(i) { return 2 * i + 1; }
  right(i) { return 2 * i + 2; }

  swap(i, j) {
    const tmp = this.heap[i]; this.heap[i] = this.heap[j]; this.heap[j] = tmp;
  }

  insert(val) {
    this.heap[this.size] = val;
    let i = this.size;
    this.size++;
    // sift up
    while (i > 0) {
      const p = this.parent(i);
      if (this.heap[p] <= this.heap[i]) break;
      this.swap(p, i);
      i = p;
    }
  }

  peek() {
    if (this.size === 0) throw new Error("Empty");
    return this.heap[0];
  }

  extractMin() {
    if (this.size === 0) throw new Error("Empty");
    const min = this.heap[0];
    this.size--;
    if (this.size === 0) {
      this.heap[0] = undefined;
      return min;
    }
    this.heap[0] = this.heap[this.size];
    this.heap[this.size] = undefined;
    // sift down from root
    let i = 0;
    while (true) {
      const l = this.left(i), r = this.right(i);
      let smallest = i;
      if (l < this.size && this.heap[l] < this.heap[smallest]) smallest = l;
      if (r < this.size && this.heap[r] < this.heap[smallest]) smallest = r;
      if (smallest === i) break;
      this.swap(i, smallest);
      i = smallest;
    }
    return min;
  }

  isEmpty() { return this.size === 0; }
}
const pq = new MinPriorityQueue();
pq.insert(5); pq.insert(2); pq.insert(7); pq.insert(3);
console.log(pq.extractMin()); // 2
console.log(pq.peek()); // 3


// // todo 7. Find the minimum element in a stack.
class MinStack {
  constructor() {
    this.data = [];
    this.mins = [];
    this.top = -1;
  }
  push(x) {
    this.top++;
    this.data[this.top] = x;
    if (this.top === 0) this.mins[this.top] = x;
    else
      this.mins[this.top] =
        this.mins[this.top - 1] <= x ? this.mins[this.top - 1] : x;
  }
  pop() {
    if (this.top === -1) throw new Error("Underflow");
    const v = this.data[this.top];
    this.data[this.top] = undefined;
    this.mins[this.top] = undefined;
    this.top--;
    return v;
  }
  getMin() {
    if (this.top === -1) throw new Error("Empty");
    return this.mins[this.top];
  }
}


// // todo 8. Check if a string can be reduced to an empty string by recursive removal of adjacent duplicates.
function canReduceToEmpty(s) {
  // stack of chars
  const buf = [];
  let top = -1;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (top >= 0 && buf[top] === ch) {
      // remove the adjacent duplicate pair
      buf[top] = undefined;
      top--;
    } else {
      top++;
      buf[top] = ch;
    }
  }
  return top === -1;
}
console.log(canReduceToEmpty("abbba")); // false
console.log(canReduceToEmpty("abba")); // true (remove 'bb' -> 'aa' -> remove -> empty)
console.log(canReduceToEmpty("abccba")); // true


// // todo 9. Design a system that supports efficient insertion and retrieval of most recent elements (deque).
class Deque {
  constructor(capacity) {
    this.cap = capacity;
    this.arr = new Array(capacity);
    this.front = 0;   // index of current front
    this.rear = -1;   // index of current rear
    this.count = 0;
  }
  isEmpty() { return this.count === 0; }
  isFull() { return this.count === this.cap; }

  pushBack(x) {
    if (this.isFull()) throw new Error("Full");
    this.rear = (this.rear + 1) % this.cap;
    this.arr[this.rear] = x;
    this.count++;
    if (this.count === 1) this.front = this.rear;
  }

  pushFront(x) {
    if (this.isFull()) throw new Error("Full");
    this.front = (this.front - 1 + this.cap) % this.cap;
    this.arr[this.front] = x;
    this.count++;
    if (this.count === 1) this.rear = this.front;
  }

  popFront() {
    if (this.isEmpty()) throw new Error("Empty");
    const v = this.arr[this.front];
    this.arr[this.front] = undefined;
    this.front = (this.front + 1) % this.cap;
    this.count--;
    if (this.count === 0) { this.front = 0; this.rear = -1; }
    return v;
  }

  popBack() {
    if (this.isEmpty()) throw new Error("Empty");
    const v = this.arr[this.rear];
    this.arr[this.rear] = undefined;
    this.rear = (this.rear - 1 + this.cap) % this.cap;
    this.count--;
    if (this.count === 0) { this.front = 0; this.rear = -1; }
    return v;
  }

  peekFront() {
    if (this.isEmpty()) throw new Error("Empty");
    return this.arr[this.front];
  }
  peekBack() {
    if (this.isEmpty()) throw new Error("Empty");
    return this.arr[this.rear];
  }
}
const d = new Deque(5);
d.pushBack(1); d.pushBack(2);
d.pushFront(0);
console.log(d.popBack()); // 2
console.log(d.popFront()); // 0

// // todo 10. Design a system that supports efficient insertion and retrieval of most recent elements (deque).