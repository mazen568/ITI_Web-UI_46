#include<iostream>
using namespace std;

int main() {
	//dynamic memory is memory allocated at run time, 
	//unlike local(stack) variables which are allocated at runtime
	//reserving heap memory(shared memory)
	//reserve memory---> you should relese memory at the end of program
	//or end of a certain block of code
	// you manually control the allocation and deallocation using new and delete
	//you should deallocate the memory otherwise you will get a memory leak
	int a = 5; // allocated at compile-time on the stack

	int* p = new int; //reserve some memory in heap for me
	//p itself stored in the stack
	//but the data it points at is in the heap
	*p = 10;
	delete p; //you are freeing the memory the p was pointing at
	//now p is pointing at a location in the memory that was just deleted(dangling pointer)
	//make the pointer point at nothing(nullptr)
	p = nullptr;

	cout << endl << "______________________________________ " << endl << endl;

	int size;
	cin >> size;
	int* parr = new int[size];
	int* pcurrent = parr;

	for (int i = 0; i < size; i++, pcurrent++)
	{
		cout << "element at " << i + 1 << ": ";
		cin >> *pcurrent;
	}
	
	for (int i = 0,*pcurrent=parr; i < size; i++, pcurrent++)
	{
		cout << *pcurrent << endl;
	}

	delete []parr;
	parr = nullptr; 

}