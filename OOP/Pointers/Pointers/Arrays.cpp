//#include <iostream>
//#include<array>
//using namespace std;
//int main() {
//	int arr[4] = {10,20,30,40};
//	int * pend = arr + 3;
//	///addresses
//	for (int *p = arr; p <= pend; p++)
//	{
//		cout << p << endl;
//		
//	}
//
//	//values
//	for (int* p = arr; p <= pend; p++)
//	{
//		cout << *p << endl;
//
//	}
//
//	cout << endl << "______________________________________ " << endl << endl;
//
//	/*int sum = 0;
//	for (int i = 0, *pcurr = arr; i < 4; i++, pcurr++) {
//		cout << "element at : " << i + 1 <<" value is "<< *pcurr << endl;
//		sum += *pcurr;
//	}
//
//	cout << "sum is : " << sum << endl;*/
//
//
//	cout << endl << "______________________________________ " << endl << endl;
//	int newArr[4];
//	int sum = 0;
//	for (int i = 0, *pcurr = arr; i < 4; i++) {
//		cout << "element at " << i + 1 << " : ";
//		cin >> *pcurr;
//		sum += *(pcurr++);
//	}
//
//	cout << "sum is : " << sum << endl;
//
//	cout << endl << "______________________________________ " << endl << endl;
//
//	for (int i = 0, *pcurr = arr; i < 4; i++, pcurr++) {
//		cout << "Element " << i + 1 << ": " << *pcurr << endl;
//	}
//
//	return 0;	
//}