#pragma once
#include<iostream>
#include<string>
using namespace std;
class Stack
{
	string name;
	int top;
	int* stp;
	int size;
	static inline int count = 0;
public:
	Stack() {
		name = "default";
		top = 10;
		size = 10;
		stp = new int[size];
		count++;
		cout << "constructor called for object: " << (*this).name << endl;
	}
	Stack(int size,string name) {
		this->name= name;
		top = 0;
		(*this).size = size;
		stp = new int[size];
		count++;
		cout << "constructor called for object: " << (*this).name << endl;
	}
	Stack& push(int value);
	Stack& pop();
	Stack& showElements();
	static void showCounter();
	~Stack() {
		cout << "destructor called for object: "<<(*this).name<< endl;
		count--;
		delete[] stp;
	}
};

Stack& Stack::push(int value) {
	if (top == size) {
		cout << "full stack" << endl;
	}
	else {
		stp[top] = value;
		top++;
	}
	return *this;
}
//return *this 3shan el chaining w return by reference 3shan kda kol shwya by3ml copy lw 3mlna chaining w kda awl push bs hya el ht2sr
//fe el stack object el ehna 3amleno w htdrb error

Stack& Stack::pop() {
	if (!top) {
		cout << "empty stack" << endl;
	}
	else {
		top--;
	}
	return *this;
}

void Stack::showCounter() {
	cout << "number of objects created is : " << count;
}
Stack& Stack::showElements() {
	if (top == 0) {
		cout << "stack is empty";
		return *this;
	}
	for (int i = 0; i < top; i++) {
		cout << "element at " << i + 1 << " : " << stp[i] << endl;
	}
	return *this;
}
