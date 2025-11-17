// Day 9: Trees
// Session Focus: Introduction to binary trees and binary search trees, basic operations, and traversals.
// Session Practice Questions:

// Basic Binary Tree Implementation
// 1. Find the height of a binary tree.
// class BinaryTree {
//   constructor() {
//     this.root = [];
//   }

//   add(val) {
//     this.root.push(val);
//   }

//   height(root = 0) {
//     if (this.root[root] == undefined) {
//       return -1;
//       }
//       return Math.max(this.height(root*2+1), this.height(root*2+2)) + 1
//     }

//     heightUsingFormula() {
//         return Math.floor(Math.log2(this.root.length))
//     }
// }
// const tree = new BinaryTree();
// tree.add(1);
// console.log(tree.height()); // Output: 0
// tree.add(2);
// tree.add(3);
// console.log(tree.height()); // Output: 1
// tree.add(4);
// tree.add(5);
// console.log(tree.height()); // Output: 2

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree (BST) Implementation
class BST {
  constructor() {
    this.root = null;
  }
  insert(val, root = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      if (val < root.val) {
        if (root.left === null) {
          root.left = new Node(val);
        } else {
          this.insert(val, root.left);
        }
      } else {
        if (root.right === null) {
          root.right = new Node(val);
        } else {
          this.insert(val, root.right);
        }
      }
    }
  }
  inorder(root = this.root, arr = []) {
    if (root == null) return;
    this.inorder(root.left, arr);
    arr.push(root.val);
    this.inorder(root.right, arr);
    return arr;
  }
  // 2. Perform a pre-order traversal of a binary tree.
  preorder(root = this.root, arr = []) {
    if (root == null) return;
    arr.push(root.val);
    this.preorder(root.left, arr);
    this.preorder(root.right, arr);
    return arr;
  }
  postorder(root = this.root, arr = []) {
    if (root == null) return;
    this.postorder(root.left, arr);
    this.postorder(root.right, arr);
    arr.push(root.val);
    return arr;
  }

  // 3. Count the number of leaf nodes in a binary tree.
  countLeaf(root = this.root) {
    if (root == null) return 0;
    if (root.left == null && root.right == null) return 1;
    return this.countLeaf(root.left) + this.countLeaf(root.right);
  }

  // 4. Find all root-to-leaf paths in a binary tree.
  rootToLeaf(root = this.root, res = [], arr = []) {
    if (root == null) return res;
    arr.push(root.val);
    if (root.left == null && root.right == null) {
      res.push(arr.join(" -> "));
    } else {
      this.rootToLeaf(root.left, res, arr);
      this.rootToLeaf(root.right, res, arr);
    }
    arr.pop();
    return res;
  }

  // 5. Calculate the sum of all nodes in a binary tree.
  // *. Sum all the values while traversing the tree
  sumNodes(root = this.root) {
    if (root == null) return 0;
    return root.val + this.sumNodes(root.left) + this.sumNodes(root.right);
  }

  // 6. Check if a binary tree is a binary search tree (BST).
  isBST(root = this.root) {
    if (root == null) return true;
    if (root.left != null && root.left.val > root.val) return false;
    if (root.right != null && root.right.val < root.val) return false;
    return this.isBST(root.left) && this.isBST(root.right);
  }

  //   interchange(root = this.root) {
  //     //? this method is created for checking is isBST method working fine or not?
  //   if (root == null) return;
  //   if (
  //     (Math.floor(Math.random() * 455) % 255) % 2 == 0 &&
  //     root.left &&
  //     root.right
  //   ) {
  //     console.log("Interchanging :: ", root.left?.val, root.right?.val);
  //     [root.left, root.right] = [root.right, root.left];
  //   }
  //   this.interchange(root.left);
  //   this.interchange(root.right);
  // }

  // 7. Find the lowest common ancestor (LCA) of two nodes in a BST.

  LCA(val1, val2, root = this.root) {
    if (root == null) return [val1, val2, -1];
    console.log(root.val);
    if (root.val == val1 || root.val == val2) return [val1, val2, root.val];
    else if (root.val < val1 && root.val < val2)
      return this.LCA(val1, val2, root.right);
    else if (root.val > val1 && root.val > val2)
      return this.LCA(val1, val2, root.left);
    else if (root.val > val1 && root.val < val2) return [val1, val2, root.val];
    else if (root.val < val1 && root.val > val2) return [val1, val2, root.val];
    return -1;
  }

  // todo Post-Session Practice Questions:
  // todo 1. Perform an in-order traversal iteratively.
  inorderIterative(root = this.root) {
    const stack = [];
    const result = [];
    let current = root;
    while (current !== null || stack.length > 0) {
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
    return result;
  }

  // todo 2. Find the diameter of a binary tree.
  diameter(root = this.root) {
    let diameter = 0;
    function height(node) {
      if (node == null) return 0;
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);
      diameter = Math.max(diameter, leftHeight + rightHeight);
      return Math.max(leftHeight, rightHeight) + 1;
    }
    height(root);
    return diameter;
  }

  // todo 3. Check if two binary trees are identical.
  areIdentical(root1 = this.root, root2) {
    if (root1 == null && root2 == null) return true;
    if (root1 == null || root2 == null) return false;
    return (
      root1.val === root2.val &&
      this.areIdentical(root1.left, root2.left) &&
      this.areIdentical(root1.right, root2.right)
    );
  }

  // todo 4. Convert a binary tree to a doubly linked list.
  convertToDLL() {
    let head = null;
    let prev = null;
    function convert(node) {
      if (node == null) return;
      convert(node.left);
      if (prev == null) {
        head = node;
      } else {
        node.left = prev;
        prev.right = node;
      }
      prev = node;
      convert(node.right);
    }
    convert(this.root);
    return head;
  }

  // todo 5. Construct a binary tree from its inorder and preorder traversals.
  // * This question is already done above class BST insert method.

  // todo 6. Print all nodes at k distance from the root.
  printKDistance(k, root = this.root, currentLevel = 0, result = []) {
    if (root == null) return result;
    if (currentLevel == k) {
      result.push(root.val);
    } else {
      this.printKDistance(k, root.left, currentLevel + 1, result);
      this.printKDistance(k, root.right, currentLevel + 1, result);
    }
    return result;
  }

  // todo 7. Serialize and deserialize a binary tree.
  serialize(root = this.root) {
    if (!root) return "";
    const q = [root];
    const out = [];
    while (q.length) {
      const node = q.shift();
      if (node == null) {
        out.push("null");
      } else {
        out.push(String(node.val));
        q.push(node.left);
        q.push(node.right);
      }
    }
    // trim trailing nulls for compactness
    while (out.length && out[out.length - 1] === "null") out.pop();
    return out.join(",");
  }

  static deserialize(str) {
    if (!str) return null;
    const vals = str.split(",");
    if (!vals.length) return null;
    const rootVal = vals[0];
    if (rootVal === "null" || rootVal === "") return null;
    const root = new Node(Number(rootVal));
    const q = [root];
    let i = 1;
    while (q.length && i < vals.length) {
      const node = q.shift();
      const leftVal = vals[i++];
      if (leftVal !== undefined) {
        if (leftVal !== "null") {
          const leftNode = new Node(Number(leftVal));
          node.left = leftNode;
          q.push(leftNode);
        } else {
          node.left = null;
        }
      }
      const rightVal = vals[i++];
      if (rightVal !== undefined) {
        if (rightVal !== "null") {
          const rightNode = new Node(Number(rightVal));
          node.right = rightNode;
          q.push(rightNode);
        } else {
          node.right = null;
        }
      }
    }
    return root;
  }

  // todo 8. Find the level with the maximum sum in a binary tree.
  levelWithMaxSum(root = this.root) {
    if (!root) return { level: -1, sum: 0 };
    const q = [root];
    let level = 0;
    let maxSum = -Infinity;
    let maxLevel = 0;
    while (q.length) {
      const size = q.length;
      let levelSum = 0;
      for (let i = 0; i < size; i++) {
        const node = q.shift();
        levelSum += node.val;
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
      if (levelSum > maxSum) {
        maxSum = levelSum;
        maxLevel = level;
      }
      level++;
    }
    return { level: maxLevel, sum: maxSum };
  }

  // todo 9. Calculate the depth of the deepest leaf node.
  depthOfDeepestLeaf(root = this.root) {
    if (root == null) return 0;
    if (root.left == null && root.right == null) return 1;
    return (
      1 +
      Math.max(
        this.depthOfDeepestLeaf(root.left),
        this.depthOfDeepestLeaf(root.right)
      )
    );
  }

  // todo 10. Convert a BST to a balanced BST.
  bstToBalancedBST() {
    const values = this.inorder();
    function buildBalancedBST(vals) {
      if (vals.length === 0) return null;
      const mid = Math.floor(vals.length / 2);
      const node = new Node(vals[mid]);
      node.left = buildBalancedBST(vals.slice(0, mid));
      node.right = buildBalancedBST(vals.slice(mid + 1));
      return node;
    }
    this.root = buildBalancedBST(values);
  }
}

const tree = new BST();
const arr = [];
for (let ind = 0; ind < 10; ind++) {
  const x = Math.floor(Math.random() * 100);
  arr.push(x);
  tree.insert(x);
}
console.log("arr :", ...arr);
console.log("in  :", ...tree.inorder());
console.log("pre :", ...tree.preorder());
console.log("post:", ...tree.postorder());
console.log("Leaf Nodes Count:", tree.countLeaf());
console.log("Sum of all Nodes:", tree.sumNodes());
console.log("Root to Leaf Paths:", tree.rootToLeaf());
console.log("Is BST:", tree.isBST());
// tree.interchange();
// console.log("After Interchanging Is BST:", tree.isBST());
console.log(
  "LCA :",
  tree.LCA(
    arr[Math.floor(Math.random() * arr.length)],
    arr[Math.floor(Math.random() * arr.length)]
  )
);
console.log("Inorder Iterative :", ...tree.inorderIterative());
console.log("Diameter of Tree :", tree.diameter());
console.log("Level with Max Sum :", tree.levelWithMaxSum());
console.log("Print K Distance Nodes :", ...tree.printKDistance(1));
console.log("Depth of Deepest Leaf :", tree.depthOfDeepestLeaf());

// tree.bstToBalancedBST();
// console.log("Inorder after balancing :", ...tree.inorder());
// console.log("Is BST after balancing :", tree.isBST());

const tree2 = new BST();
arr.forEach((val) => tree2.insert(val));
console.log("Are Identical Trees :", tree.areIdentical(tree.root, tree2.root));

const dllHead = tree.convertToDLL();
let current = dllHead;
const dllValues = [];
while (current != null) {
  dllValues.push(current.val);
  current = current.right;
}

console.log("Doubly Linked List Values :", ...dllValues);

const t = new BST();
const array = [];
for (let ind = 0; ind < 10; ind++) {
  const x = Math.floor(Math.random() * 100);
  array.push(x);
  t.insert(x);
}
const s = t.serialize();
console.log("serialized:", s);
const newRoot = BST.deserialize(s);
const t2 = new BST();
t2.root = newRoot;
console.log("deserialized inorder:", t2.inorder());