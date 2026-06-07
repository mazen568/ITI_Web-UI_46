#pragma once
#include <iostream>
using namespace std;
class Stack
{
	int top;
	int size;
	int* ptr;
	static inline int count = 0;
public:
	Stack(int size):size(size),top(0),ptr(new int[size]) {
		count++;
	}
	//hena 3mlen pass by refernce 3shan lw kant by value enta kda bt3ml call ll copy constructor wnta hena
	//fl copy constructor asln fa kan hy3ml infinite recursion
	Stack(Stack& other) {
		this->top = other.top;
		this->size = other.size;
		this->ptr = new int[this->size];
		for (int i = 0; i < this->size; i++)
		{
			this->ptr[i] = other.ptr[i];
		}
		count++;
	}
	//hena 3amlen pass by refernce 3shan lw kant value ana hena b3ml call ll copy ctr fa b3ml create l copy
	//b3d kda an2l el data, tab leh mstkhdm el original by reference mn gher m3ml create l copy gdeeda
	Stack& operator=(Stack& other) {
		//Stack ss;
		//ss.push(10);
		//ss=s1; hena kda bt3ml call operator= ka2nk 3mlt kda -> ss.operator=(s1) 
		//fa kda ss howa el this w s1 how el other 
		delete[](*this).ptr;//ss kan fe data fa lazm ams7ha el awl 3shan an2l el data bta3t s1
		(*this).top = other.top;
		(*this).size = other.size;
		(*this).ptr = new int[(*this).size];
		for (int i = 0; i < (*this).size; i++)
		{
			(*this).ptr[i] = other.ptr[i];
		}

		return *this;
		//mt3mlsh count++ 3shan el object already mtcreate
	}

	Stack(Stack&& other) {
		this->top = other.top;
		this->size = other.size;
		this->ptr = other.ptr;
		
		//release resources for other
		other.top = 0;
		other.size = 0;
		other.ptr = nullptr;
		this->count++;
	}

	Stack& operator=(Stack&& other) {
		delete[]this->ptr;
		this->top = other.top;
		this->size = other.size;
		this->ptr = other.ptr;

		//release resources for other
		other.top = 0;
		other.size = 0;
		other.ptr = nullptr;
		//this->count++;de ghlt 3shan el object already mtcreate
		return *this;
	}


	Stack& push(int n) {
		if (top == size) {
			cout << "full stack" << endl;
		}
		else
		{
			ptr[top] = n;
			top++;
		}
		return *this;
	}

	Stack& pop() {

		if (!top) {
			cout << "empty stack" << endl;
		}
		else
		{
			top--;
		}
		return *this;
	}

	void showCounter() {
		cout << "count is : " << count;
	}
	Stack& showElements() {
		if (top == 0) {
			cout << "stack is empty" << endl;
			return *this;
		}
		for (int i = 0; i < top; i++) {
			cout << "element at " << i + 1 << " : " << ptr[i] << endl;
		}
		return *this;
	}
	//3mlna return by reference 3shan lw gena n3ml edit
	//zy kda msln s[0]=20 kda ehna edit l copy msh el element el original fl array
	//by reference hn3dl el asasy
	//momken tsdtkhm by value lw enta 3ayz t3ml read bs
	//3shan msh far2a hya copy wla el original lw tread bs
	int& operator[](int index){
		return ptr[index];
	}
	Stack operator+(Stack other) {
		Stack result(10);
		result.size = this->size + other.size;
		return result;

	}
	friend void showSize(Stack s);
	friend void showTop(Stack s);

	~Stack() {
		count--;
		delete[] ptr;
	}
};

void showSize(Stack s) {
	cout << "size of the stack is:" << endl;
	cout << s.size << endl;
}

void showTop(Stack s) {
	cout << "top of the stack is:" << endl;
	cout << s.ptr[s.top-1] << endl;
}

