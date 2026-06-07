/*
#include <iostream>
#include<array>
using namespace std;
int main()
{
	//array<int, 4> myarr = { 1,2,3,4 };
	//int* parr = myarr.data();//data is the addres of the first location of the array
	//cout << myarr.data() << endl;
	//cout << &myarr[0] << endl;

	//for (int i = 0; i < 4; i++)
	//{
	//	cout << "element " << i << ": " << *(parr + i) << endl;
	//}
	int arr[4] = { 10,20,30,40 };
	int* pend = arr+3;
	//addresses
	for (int *p = arr; p <= pend; p++)
	{
		cout << p << endl;
	}
	//values
	for (int* p = arr; p <= pend; p++)
	{
		cout << *p << endl;
	}
	cout << endl << "______________________________________ " << endl << endl;

	int sum = 0;
	for (int i = 0,*pcurr=arr; i < 4; i++,pcurr++)
	{
		cout << "element " << i + 1 <<" "<< *pcurr << endl;
		sum += *pcurr;
	}
	cout << "sum is : " << sum << endl; 
	cout << endl << "______________________________________ " << endl << endl;
	int newarr[4],sum2=0;
	for (int i = 0,*pcurr=newarr; i < 4; i++)
	{
		cout << "element at " << i + 1 << " : ";
		cin >> *pcurr;
		sum2 += *(pcurr++);
	}
	cout << "sum2 is : " << sum2 << endl;
	cout << endl << "______________________________________ " << endl << endl;

	for (int i = 0, *pcurr = arr; i < 4; i++, pcurr++) {
		cout << "Element " << i + 1 << ": " << *pcurr << endl;
	}

}
*/