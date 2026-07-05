#pragma once
#include<string>
#include<iostream>
#include<algorithm>
#include <vector>
#include"Node.h"
using namespace std;
class BST
{


public:
	Node* pRoot;

	BST() {
		pRoot = NULL;
	}
	Node* searchTree(Node* pRoot,int key) {
	
		if (pRoot == NULL) 
			return NULL;
		if (pRoot->data.id == key) 
			return pRoot;
		if (key < pRoot->data.id) {
			return searchTree(pRoot->pLeft,key);
		}
		else {
			return searchTree(pRoot->pRight, key);
		}

	}

	void treeTraverse(Node* pRoot) {
		if (pRoot != NULL) {
			treeTraverse(pRoot->pLeft);
			cout << pRoot->data.id << endl;
			treeTraverse(pRoot->pRight);
		}	  
	}

	void InsertNode(Node*& pRoot, Node* newNode) {

		Node* node = searchTree(pRoot, newNode->data.id);


		if (node == NULL) {
			if (pRoot == NULL) {
				pRoot = newNode;
			}
			else if (newNode->data.id < pRoot->data.id) {
				InsertNode(pRoot->pLeft, newNode);
			}
			else if (newNode->data.id > pRoot->data.id) {
				InsertNode(pRoot->pRight , newNode);
			}
		}
		else {
			cout << "dup id not allowed: " << newNode->data.id << endl;
			delete newNode;
		}
		
	}

	void InsertNode2(Node* pRoot, Node* newNode) {

		Node* node = searchTree(pRoot, newNode->data.id);
		if (node == NULL) {
			Node* curr = pRoot;
			Node* parent = NULL;


			while (curr != NULL) {
				parent = curr;
				if (newNode->data.id < curr->data.id)
					curr = curr->pLeft;
				else
					curr = curr->pRight;

			}	
			if (pRoot == NULL) {
				pRoot = newNode;
			}
			else if (newNode->data.id < parent->data.id)
				parent->pLeft = newNode;
			else
				parent->pRight = newNode;
		}
		else
		{
			cout << "dup id not allowed: " << newNode->data.id << endl;
			delete newNode;
		}


	

	}

	void Delete(Node*& pRoot, int key) {
		if (key < pRoot->data.id) {
			Delete(pRoot->pLeft, key);
		}
		else if (key > pRoot->data.id) {
			Delete(pRoot->pRight, key);
		}
		else
			removeNode(pRoot);
	}

	void removeNode(Node *&pRoot) {
	    
		if (pRoot->pLeft == NULL && pRoot->pRight == NULL) {
			delete pRoot;
			pRoot = NULL; 
		}
		else if (pRoot->pLeft == NULL) {
			Node* temp = pRoot;
			pRoot = pRoot->pRight;//da el address
			delete temp;//da el msa7a nfsha
		}

		else if (pRoot->pRight== NULL) {
			Node* temp = pRoot;
			pRoot = pRoot->pLeft;//da el address
			delete temp;//da el msa7a nfsha
		}
		else{
			Node* maxLeft = GetMax(pRoot->pLeft);
			pRoot->data = maxLeft->data;
			Delete(pRoot->pLeft, maxLeft->data.id);
		}
	}

	int countNodes(Node* pRoot) {
		if (pRoot == NULL) 
			return 0;

		return countNodes(pRoot->pLeft) + 1 + countNodes(pRoot->pRight);
	}
	Node* GetMax(Node* pRoot) {
		if (pRoot==NULL) 
			 return NULL;
		Node* current = pRoot;

		while (current->pRight != NULL) {
			current = current->pRight;
		}
		return current;
	}
	int countLevels(Node *pRoot) {
		if (pRoot == NULL)
			return 0;
		int left = countLevels(pRoot->pLeft);
		int right = countLevels(pRoot->pRight);


		return 1 + max(left, right);

	
	}

	bool isBalanced(Node* pRoot) {
		if (pRoot==NULL)
			return true;

		int left = countLevels(pRoot->pLeft);
		int right = countLevels(pRoot->pRight);

		if (abs(left - right) > 1) 
			return false;

		return isBalanced(pRoot->pLeft) && isBalanced(pRoot->pRight);
	}


	void storeInOrder(Node* root, vector<Node*>& nodes) {
		if (root==NULL) 
			return;
		storeInOrder(root->pLeft, nodes);
		nodes.push_back(root);
		storeInOrder(root->pRight, nodes);
	}

	Node* buildBalancedBST(vector<Node*>& nodes, int start, int end) {
		if (start > end) 
			return NULL;

		int mid = (start + end) / 2;
		Node* root = nodes[mid];
		//1 2 3 4 5 6 7
		//1 2 3 => 2
		//5 6 7 => 6


		root->pLeft = buildBalancedBST(nodes, start, mid - 1);
		root->pRight = buildBalancedBST(nodes, mid + 1, end);

		return root;
	}

	void rebalance() {
		vector<Node*> nodes;
		storeInOrder(pRoot, nodes);
		pRoot = buildBalancedBST(nodes, 0, nodes.size() - 1);
	}
	void InsertBalanced(Node* newNode) {
		InsertNode(pRoot, newNode);
		if (!isBalanced(pRoot)) 
			rebalance();
	}

	void DeleteBalanced(int key) {
		Delete(pRoot, key);
		if (!(isBalanced(pRoot)))
			rebalance();
	}

	void deleteTree(Node* pRoot) {
		if (pRoot == NULL)
			return;
		else{
			deleteTree(pRoot->pLeft);
			deleteTree(pRoot->pRight);
			delete pRoot;
		}
	}

	~BST() {
		deleteTree(pRoot);
		cout << "destructor" << endl;
	}

};

