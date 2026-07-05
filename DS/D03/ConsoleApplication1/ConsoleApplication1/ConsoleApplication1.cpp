#include <iostream>
#include "BST.h"
#include "Node.h"

using namespace std;

int main() {
    BST bst;

    cout << "=== Testing InsertNode2 ===" << endl;
    Node* root = new Node({ 20, "mazen", 5000 });
    bst.InsertNode2(root, new Node({ 10, "mazen", 5000 }));
    bst.InsertNode2(root, new Node({ 30, "hassan", 3000 }));
    bst.InsertNode2(root, new Node({ 25, "mopahmed", 1000 }));
    bst.InsertNode2(root, new Node({ 40, "menna", 7000 }));
    bst.InsertNode2(root, new Node({ 35, "youssef", 3300 }));
    bst.InsertNode2(root, new Node({ 50, "lkjasd", 5100 }));

    cout << "In-order traversal after InsertNode2:" << endl;
    bst.treeTraverse(bst.pRoot);
    cout << "Node count: " << bst.countNodes(bst.pRoot) << endl;
    cout << "Node levels: " << bst.countLevels(bst.pRoot) << endl;
    cout << endl;

    cout << "=== Testing Delete ===" << endl;
    cout << "Deleting 10 (leaf)..." << endl;
    bst.Delete(root, 10);
    cout << "Deleting 30 (node with 2 children)..." << endl;
    bst.Delete(root, 30);
    cout << "Deleting 40 (node with 1 child)..." << endl;
    bst.Delete(root, 40);

    cout << "In-order traversal after deletions:" << endl;
    bst.treeTraverse(root);
    cout << "Node count: " << bst.countNodes(root) << endl;
    cout << endl;

    cout << "=== Testing InsertNode (recursive insert with duplicates) ===" << endl;
    Node* root2 = new Node({ 20, "mazen", 5000 });
    bst.InsertNode(root2, new Node({ 10, "mazen", 5000 }));
    bst.InsertNode(root2, new Node({ 30, "hassan", 3000 }));
    bst.InsertNode(root2, new Node({ 25, "mopahmed", 1000 }));
    bst.InsertNode(root2, new Node({ 40, "menna", 7000 }));
    bst.InsertNode(root2, new Node({ 35, "youssef", 3300 }));
    bst.InsertNode(root2, new Node({ 50, "lkjasd", 5100 }));

    cout << "In-order traversal of second BST:" << endl;
    bst.treeTraverse(root2);
    cout << "Node count: " << bst.countNodes(root2) << endl;

    cout << "Trying to insert duplicate (10)..." << endl;
    bst.InsertNode(root2, new Node({ 10, "mazen", 5000 }));
    cout << endl;

    cout << "=== Testing Balanced BST insertion ===" << endl;

    BST bstBalanced;    // pRoot starts as NULL

    bstBalanced.InsertBalanced(new Node({ 20, "mazen", 5000 }));
    bstBalanced.InsertBalanced(new Node({ 10, "mazen", 5000 }));
    bstBalanced.InsertBalanced(new Node({ 30, "hassan", 3000 }));
    bstBalanced.InsertBalanced(new Node({ 25, "mopahmed", 1000 }));
    bstBalanced.InsertBalanced(new Node({ 40, "menna", 7000 }));
    bstBalanced.InsertBalanced(new Node({ 35, "youssef", 3300 }));
    bstBalanced.InsertBalanced(new Node({ 50, "lkjasd", 5100 }));

    cout << "In-order traversal of balanced BST:" << endl;
    bstBalanced.treeTraverse(bstBalanced.pRoot);
    cout << "Node count: " << bstBalanced.countNodes(bstBalanced.pRoot) << endl;

    cout << "Deleting from balanced BST (20)..." << endl;
    bstBalanced.DeleteBalanced(20);
    cout << "In-order after deletion:" << endl;
    bstBalanced.treeTraverse(bstBalanced.pRoot);
    cout << "Node count: " << bstBalanced.countNodes(bstBalanced.pRoot) << endl;

    return 0;
}
