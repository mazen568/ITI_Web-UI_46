#pragma once
#include "Employee.h"
#include <iostream>
using namespace std;

class Node {
public:
    Employee data;
    Node* pLeft;
    Node* pRight;

    Node(Employee data) {
        this->data = data;
        pLeft = NULL;
        pRight = NULL;
    }
};
