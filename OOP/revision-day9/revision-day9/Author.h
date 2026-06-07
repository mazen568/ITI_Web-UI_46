#pragma once
#include<iostream>
#include<string>
using namespace std;
class Author
{
	string name;
	string nationality;

public:
	Author(string name,string nationality):name(name),nationality(nationality) {}
	string getName() {
		return name;
	}
	string getNationality() {
		return nationality;
	}
};

