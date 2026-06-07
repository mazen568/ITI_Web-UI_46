#pragma once
#include "Complex.h"
#include <iostream>
using namespace std;
class Complex
{
	float real, image;
	static inline int count = 0;

public:
	Complex();
	Complex(float real);
	Complex(float real, float image);
	Complex operator+(Complex c);
	Complex operator+(float f);
	Complex operator++();
	Complex operator++(int);
	static void showCounter();
	void printComplex();
	~Complex();


};

Complex::Complex() {
	cout << "default constructor " << endl;
	real = 0;
	image = 0;
	count++;
}
Complex::Complex(float real) {
	cout << "1 parameter constructor " << endl;
	this->real = real;
	image = 0;
	count++;
}

Complex::Complex(float real, float image) {
	cout << "2 parameter constructor " << endl;
	this->real = real;
	this->image = image;
	count++;
}
void Complex::showCounter() {
	cout << "count is : " << count << endl;
}
void Complex::printComplex() {
	if (image == 0 && real == 0)
		cout << 0 << endl;
	else if (image == 0)
		cout << real << endl;
	else if (real == 0) {
		if (image == 1)
			cout << "i";
		else if (image == -1)
			cout << "-i" << endl;
		else
			cout << image << "i" << endl;
	}
	else {
		cout << real;
		if (image > 0) {
			if (image == 1)
				cout << "+i" << endl;
			else
				cout << "+" << image << "i" << endl;
		}
		else {
			if (image == -1)
				cout << "-i" << endl;
			else
				cout << image << "i" << endl;
		}
	}
}

Complex Complex::operator+(Complex rhs) {
	Complex result;
	result.real = this->real + rhs.real;
	result.image= this->image+ rhs.image;

	return result;


}


Complex Complex::operator+(float f) {
	Complex result;
	result.real = this->real + f;
	result.image = this->image + f;

	return result;


}
//prefix
Complex Complex::operator++() {
	this->real++;
	this->image++;
	return *this;

}
//postfix
Complex Complex::operator++(int) {
	Complex temp = *this;
	this->real++;
	this->image++;
	return temp;
}
Complex::~Complex() {
	cout << "desctructor " << endl;
	count--;
}

