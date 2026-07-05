#pragma once
#include"DLL.h"
class StackDLL:public DLL
{
public:
    void push(Employee emp) {
        appendNode(emp);
    }

    Employee pop() {
        if (pLast==NULL)
            cout << "stack is empty" << endl;
        Node* temp = pLast;
        Employee emp = temp->data;

        if (pLast->pPrev!=NULL) {
            pLast = pLast->pPrev;
            pLast->pNext=NULL;
        }
        else { 
            pStart = pLast=NULL;
        }

        delete temp;
        return emp;
    }

     Node* peek() {
        if (pLast == nullptr) 
            cout << "stack is empty" << endl;
        return pLast;
    }
  

};

