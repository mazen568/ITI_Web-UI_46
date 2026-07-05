#pragma once
#include<string>
#include<iostream>
#include"Node.h"
using namespace std;
class SortedDLL
{
protected:
    Node* pStart;
    Node* pLast;


public:
    SortedDLL() {
        pStart = NULL;
        pLast = NULL;
    }

	SortedDLL(SortedDLL& other)  
	{
		pStart = NULL;
		pLast = NULL;
		Node* current = other.pStart;
		while (current) {
			insertNode(current->data);
			current = current->pNext;
		}
	}


	SortedDLL& operator=(SortedDLL& other) {
		freeList();
		Node* current = other.pStart;
		while (current!=NULL) {
			insertNode(current->data);
			current = current->pNext;
		}
		return *this;
	}


	Employee& operator[](int index) {
		Node* temp = pStart;
		int i = 0;
		while (i < index) { temp = temp->pNext; i++; }
		if (!temp) cout << "Index out of range";
		return temp->data;
	}

	


	void insertNode(Employee emp)
	{
		Node* pNew = new Node(emp);
        if (pStart == NULL)//empty
            pStart = pLast = pNew;
        else {
            Node* pSearch = pStart;
			while ((pSearch != NULL) && (pSearch->data.getId() < pNew->data.getId()))
			{
				pSearch = pSearch->pNext;
			}
				if (pSearch == pStart) {
					pNew->pNext = pStart;
					pStart->pPrev = pNew;
					pStart = pNew;
				}

				else if (pSearch == NULL)//append
				{
					pLast->pNext = pNew;
					pNew->pPrev = pLast;
					pLast = pNew;
				}
				else //general case 
				{
					pNew->pNext = pSearch;
					pNew->pPrev = pSearch->pPrev;
					pSearch->pPrev->pNext = pNew;
					pSearch->pPrev = pNew;
				}

			
        }
	}
	Node* searchList(int id) {
		Node* pSearch = pStart;
		while (pSearch != NULL) {
			if (id == pSearch->data.getId())
				return pSearch;

			pSearch = pSearch->pNext;

		}
		return NULL;
		//return psearch tnf3 brdo 3ady
	}

	void freeList() {
		Node* pDelete;

		//efdl loop l7d ma pstart=nulll m3nah en el list fdyt khlas
		while (pStart != NULL) {
			pDelete = pStart;
			pStart = pStart->pNext;
			delete pDelete;
		}
		pLast = NULL;
	}


	void deleteNode(int id) {
		Node* pDelete = searchList(id);

		if (pDelete == NULL) cout << "id not found" << endl;
		else {
			//at least one node is found because searchlist does that

			//only one node in list
			if (pStart == pLast)
				pStart = pLast = NULL;
			else if (pDelete == pStart)//delete first node,delete from pstart
			{
				pStart = pStart->pNext;
				pStart->pPrev = NULL;
			}
			else if (pDelete == pLast) //delete last node, delete from plast
			{
				pLast = pLast->pPrev;
				pLast->pNext = NULL;
			}
			else //general case
			{
				pDelete->pPrev->pNext = pDelete->pNext;
				pDelete->pNext->pPrev = pDelete->pPrev;
			}

			delete pDelete;
		}
	}

	void displayAll() {

		Node* pSearch = pStart;
		while (pSearch != NULL) {

			 pSearch->display();

			pSearch = pSearch->pNext;

		}
	}

	void displayNode(int id) {
		Node* n = searchList(id);
		if (n)
			n->display();
		else
			cout << "Node not found!" << endl;
	}
	int NodeCount() {
		int count = 0;
		Node* current = pStart;
		while (current!=NULL)
		{ count++; 
		current = current->pNext;
		}
		return count;
	}

	~SortedDLL() {
		freeList();
	}




};

