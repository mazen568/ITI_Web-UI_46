//#include<iostream>
//using namespace std;
//
//int main() {
//	//dynamic memory lives in heap and allocated at tunr time
//	//reserve memory--> should release memory yourself before the end of the program or end foa certain block of code
//	//you manually control the allocation and deallocation of memory using new and delete
//	//you should deallocate the memory otherwise you will get a memory leak
//	//stack has local variables, allocated at compile time, automatically deleted at the end of program, compiler manages them
//
//	int a = 5;//variable allocated in the stack and will be automatically destroyed and allocated at run time
//
//	int* p = new int;//reserve some memory in the heap for me
//	//p which is the pointer is stored in the stack
//	//but data it points to is in the heap
//	*p = 10;
//	delete p;
//	//you freed the memory in the heap that p was pointing at
//	//now is pointing at a location in the memory that was just deleted(dangling pointer)
//	//make this pointer point at nothing(null pointer)
//	p = nullptr;
//	cout << endl << "______________________________________ " << endl << endl;
//	int size;
//	cin >> size;
//	int* parr = new int[size];
//	//first you have to use pcurrent because if you used parr you would be incrementing parr and then you try to access parr you will 
//	//see it is past the end of the array and delete must receive the exact same address that was returned by new otherwise it will crash
//	for (int i = 0,*pcurrent=parr; i < size; i++,pcurrent++)
//	{
//		cout << "element at " << i + 1 << ": ";
//		cin >> *pcurrent;
//	}
//	for (int i = 0; i < size; i++, parr++)
//	{
//		cout << *parr << endl;
//	}
//
//	delete[] parr;
//	parr = nullptr;
//
//}