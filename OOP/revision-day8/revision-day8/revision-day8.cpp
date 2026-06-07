#include <iostream>
#include "Stack.h"
using namespace std;
int main()
{
    Stack s1(5);
    cout << "s1 elements before copy ctr:" << endl;
    s1.push(10).push(8).push(7).pop().showElements();
    s1.showCounter();
    Stack s2 = s1;
    cout << endl;
    cout << "s2 elements after copy ctr:" << endl;
    s2.showElements();
    s2.pop();
    cout << endl;
    cout << "s2 elements after pop:" << endl;
    s2.showElements();
    cout << endl;
    cout << "s1 elements after pop:" << endl;
    s1.showElements();
    cout << endl;
    Stack s3 = std::move(s1);
    cout << "s3 elements after move ctr:" << endl;
    s3.showElements();
    cout << endl;
    cout << "s1 elements after move ctr:" << endl;
    s1.showElements();
    cout << endl;
    Stack s4(5);
    cout << "s4 elements before =operator:" << endl;
    s4.push(7).push(11).push(8).pop().showElements();
    s4 = s3;
    cout << endl;
    s4.push(10);
    cout << "s3 element after pushing in s4:" << endl;
    s3.showElements();
    cout << endl;
    cout << "s4 element after pushing in s4:" << endl;
    s4.showElements();
    cout << endl;
    cout << "s2 before =move operator" << endl;
    s2.showElements();
    cout << endl;
    cout << "s4 before =move operator" << endl;
    s4.showElements();
    cout << endl;
    s4 = std::move(s2);
    cout << "s2 after =move operator" << endl;
    s2.showElements();
    cout << endl;
    cout << "s4 after =move operator" << endl;
    s4.showElements();
    cout << endl;
    s4[0] = 1231;
    showTop(s4);
    Stack s5(11);
    Stack res = s4 + s5;
    showSize(res);


    





}

