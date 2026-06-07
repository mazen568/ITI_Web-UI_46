
#include <iostream>
#include "Stack.h"
#include"Complex.h"

using namespace std;
//when does the copy constructor run
//1-when you create an object from another object
/*
MyClass obj;
MyClass obj2=obj;
*/
//2-when you pass an object by value to a function
/*
 void foo(MyClass x){}
 foo(obj)
*/
//3-when a function returns an object by value
/*
MyClass bar(){
MyClass temp;
return temp;
}
*/
int main()
{

	//int x{5.5};//error ektbha s7
	/*Stack s1;
	s1.push(10).push(20).push(40).pop();
	Stack s2 = s1;
	s2.showElements();
	s1.showElements();

	Stack s;
	s.push(10);
	s = s1;*/


	/*string name{ "ahmed" };
	string fullname = move(name);
	cout << name;
	cout << fullname;*/

	//Stack ss(10);
	//ss.push(1).push(5).push(7);
	//Stack s2 = move(ss);
	//ss.showElements();//empty
	//s2.showElements();//1,5,7

	Stack s2;
	s2.push(10).push(20);
	s2.showElements();
	Stack ss;
	ss.push(8).push(9);
	s2 = ss;
	s2.showElements();
	ss.showElements();


	/*Complex c1(2.1, 3.1);
	Complex c2(3, 4);
	Complex result=c1 + c2;
	result.printComplex();
	Complex result2 = c1 + 2.5;
	result2.printComplex();

	c2++.printComplex();
	(++c1).printComplex();*/

}

