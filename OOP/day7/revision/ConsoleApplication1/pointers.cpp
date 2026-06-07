/*
#include <iostream>
using namespace std;
struct Employee
{
    int id;
    double salary;
    char gender;

};
int main()
{
    
    int x = 10;
    int* ptr = &x;
    cout << "ptr value is : " << ptr << endl;//it is gonna be the address that ptr ptroints to
    cout << "&x value is: " << &x << endl;//the address of x which ptr ptroints to, so they are basically the same value ptrrinted
    cout << "x value is: " << x << endl;//value of x=10
    cout << "*ptr value is: " << *ptr << endl;//* is the dereference optrerator that allows you to access the value stored in that address which is 10
    cout << endl << "______________________________________ " << endl << endl;

    *ptr = 5;
    cout << "ptr value is : " << ptr << endl;
    cout << "* ptr value is : " << *ptr << endl;
    cout << "&x value is : " << &x << endl;
    cout << "x value is : " << x << endl;

    cout << endl << "______________________________________ " << endl << endl;


    int a = 5;
    int b = 6;
    cout << &a << endl;
    cout << &b << endl;
    cout << endl << "______________________________________ " << endl << endl;


    *ptr += 100;
    cout << "*ptr value is : " << *ptr << endl;
    cout << "x value is : " << x << endl;
    cout << endl << "______________________________________ " << endl << endl;

    int y = 50;
    int* p1 = &y;
    int* p2 = &y;
    *p1 = 80;
    cout << "x value is : " << y << endl;  // 80
    cout << "* p2 value is : " << *p2 << endl; // 80
    cout << endl << "______________________________________ " << endl << endl;

    int* q = nullptr;
    cout << "q value is : " << q << endl;//000000000000000000000
    cout << endl << "______________________________________ " << endl << endl;

    char ch = 'a';
    char* pch = &ch;
    Employee emp = { 1123, 2000, 'm' };
    Employee* pemp = &emp;
    cout << sizeof(pch) << endl;//8
    cout << sizeof(pemp) << endl;//8
    //all pointers on a 64-bit system are 8 bytes 
    cout << endl << "______________________________________ " << endl << endl;

    int arr[5] = { 10,20,30,40,50 };//array name is a pointer to the first element of the array
    //arr is equivalent to &arr[0]
    //*arr is equivalent to arr[0]
    //arr+1 is equivalent &arr[1]
    cout << "arr value is : " << arr << endl;
    cout << "&arr[0] is : " << &arr[0] << endl;
    if (&arr[0] == arr) {
        cout << "equal" << endl;
    }
    else
        cout << "not equal" << endl;

    cout << arr + 1 << endl;
    cout << &arr[1] << endl;
    cout << endl << "______________________________________ " << endl << endl;
    cout << *arr + 1 << endl;//this gives you 2 because it is just adding 1 to the first element of the array
    cout << *(arr + 1) << endl;//this gives you the second element of the array
    cout << arr[1] << endl;

}
*/