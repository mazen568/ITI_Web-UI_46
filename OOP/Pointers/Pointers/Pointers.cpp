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
	int* ptr = &x; //* is the dereference operator that allows you to access the value stored in that address
	cout << "ptr value is : " << ptr << endl;
	cout << "* ptr value is : " << *ptr << endl;
	cout << "&x value is : " << &x << endl;
	cout << "x value is : " << x << endl;
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
	cout << "* ptr value is : " << *ptr << endl;
	cout << "x value is : " << x << endl;

	cout << endl << "______________________________________ " << endl << endl;
	int y = 50;
	int* p1 = &y; 
	int* p2 = &y;

	*p1 = 80;
	cout <<"x value is : " << y << endl;  // ?
	cout <<"* p2 value is : " << *p2 << endl; // ?


	cout << endl << "______________________________________ " << endl << endl;
	int* q = nullptr;
	cout << "q value is : " << q << endl;
	cout << endl << "______________________________________ " << endl << endl;

	char ch = 'A';
	char* pch = &ch;
	cout << sizeof(pch)<< endl;//8 bytes
	//all pointers on a 64-bit system are 8 bytes 
	// int* p1;
	//char* p2;
	//double* p3;
	//float* p4;
	//sizeof(p1) == sizeof(p2) == sizeof(p3) == sizeof(p4) == 8
	cout << endl << "______________________________________ " << endl << endl;
	Employee emp = {1,4000.5,'m'};

	Employee* empPointer = &emp;
	cout << sizeof(empPointer) << endl;//8 bytes

	cout << endl << "______________________________________ " << endl << endl;
	//array name is a pointer to the first element
	int arr[5] = { 10,20,30,40,50 };
	//arr is equivalent to &arr[0]
	//*arr is equivalent to arr[0]
	//arr+1 is equivalent &arr[1]
	cout << "arr value is : " << arr << endl;
	cout << "&arr[0} is : " << &arr[0] << endl;
	if (&arr[0] == arr)
		cout << "equal" << endl;
	else
		cout << "not equal" << endl;
	cout << arr + 1 << endl;
	cout << &arr[1] << endl;

	cout << endl << "______________________________________ " << endl << endl;
	cout << *arr << endl;
	cout << arr[0] << endl;
	cout << endl << "______________________________________ " << endl << endl;
	cout << *arr + 1 << endl;//this gives you 11 because it is just adding 1 to the first element of the array
	cout << *(arr + 1) << endl;
	cout << arr[1] << endl;
	return 0;

}
*/