#pragma once
#include<iostream>
using namespace std;
class Stack
{
	int top;
	int* stp;
	int size;
	static inline int count = 0;

public:
	Stack();
	Stack(int size);
	Stack& push(int n);
	Stack(Stack &other);
	Stack(Stack&& other); /*noexcept*///optional do it so does not throw an excpetion;
	Stack& operator=(Stack& other);
	Stack& pop();
	~Stack();
	static void showCounter();
	Stack& showElements();
};


Stack::Stack() {
	top = 0;
	size = 10;
	stp = new int[size];
	count++;
}

Stack::Stack(int size) {
	top = 0;
	this->size = size;
	stp = new int[size];
	count++;
}

Stack& Stack::push(int n) {
	if (top == size) {
		cout << "full stack" << endl;
	}
	else
	{
		stp[top] = n;
		top++;
	}
	return *this;
}

Stack& Stack::pop() {

	if (!top) {
		cout << "empty stack" << endl;
	}
	else
	{
		top--;
	}
	return *this;
}

void Stack::showCounter() {
	cout << "count is : " << count;
}
Stack& Stack::showElements() {
	if (top == 0) {
		cout << "stack is empty"<<endl;
		return *this;
	}
	for (int i = 0; i < top; i++) {
		cout << "element at " << i + 1 << " : " << stp[i] << endl;
	}
	return *this;
}


//lw kont 3aml other by value kda enta bt3ml call ll copy constructor el enta feh asln dlw2te fa da hydkhlk fe recursion
Stack::Stack(Stack& other) {
	this->top = other.top;
	this->size = other.size;
	//deep copying
	this->stp = new int[other.size];
	for (int i = 0; i < other.size; i++)
	{
		this->stp[i] = other.stp[i];
	}
	this->count++;


}
Stack::Stack(Stack&& other) {
	this->top = other.top;
	this->size = other.size;
	this->stp = other.stp;

	other.top = 0;
	other.size = 0;
	other.stp = nullptr;
	this->count++;
}

//return *this for chaining
//e3mlha by reference 3la tol 3hsan lw value enta kda bt3ml copy constuctor fa 3la tol be reference w esthkdm el original copy
Stack& Stack::operator=(Stack& other) {
	delete[]this->stp;
	this->top = other.top;
	this->size = other.size;
	this->stp = new int[other.size];
	for (int i = 0; i < other.size; i++)
	{
		this->stp[i] = other.stp[i];
	}
	

	return *this;
}

Stack::~Stack() {
	delete[] stp;
}

