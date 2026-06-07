//#include <iostream>
//using namespace std;
////pass by value makes a copy of the variable inside your function
////the function gets a copy not the original variable.
//void addTenByValue(int x) {
//
//	x = x + 10;
//}
////pass by reference, you give the function the acutal variable not a copy
////reference is not a pointer its just another name for the variable outside its scope(inside the function)
////reference type can't handle nulls
//void addTenByRef(int& x) {
//	x = x + 10;
//}
//void swapByRef(int& x, int& y) {
//	int temp = x;
//	x = y;
//	y = temp;
//}
////pass by address
////swapByAdd(NULL,NULL) is okay
//void swapByAdd(int* px, int* py) {
//	int temp = *px;
//	*px = *py;
//	*py = temp;
//}
//
//
//int main() {
//	int a = 5;
//	addTenByValue(a);
//	cout << a << endl;
//
//	addTenByRef(a);
//	cout << a<< endl;
//	int x = 5,y=7;
//	swapByRef(x, y);
//	cout << "value of x : "<< x << endl;
//	cout << "value of y : " << y << endl;
//
//	int m = 10, n = 20;
//	swapByAdd(&m, &n);
//	cout << "value of m : " << m << endl;
//	cout << "value of n : " << n << endl;
//
//
//
//
//
//}