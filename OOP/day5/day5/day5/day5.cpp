#include <iostream>
#include "Stack.h"
#include <string>
using namespace std;
int main()
{
    Stack s1(5,"s1");
    s1.push(5);
    s1.push(7);
    s1.push(9);
    s1.pop();
    s1.showElements();
}

