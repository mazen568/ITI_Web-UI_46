#pragma once
#include "Employee.h"
#include <iostream>
using namespace std;

class Node {
public:
    Employee data;
    Node* pNext;
    Node* pPrev;

    Node(Employee data) {
        this->data= data;
        pNext = nullptr;
        pPrev = nullptr;
    }

    void display() {
        cout << "Employee ID: " << data.getId()
            << ", Name: " << data.getName()
            << ", Salary: " << data.getSalary() << endl;
    }
};
