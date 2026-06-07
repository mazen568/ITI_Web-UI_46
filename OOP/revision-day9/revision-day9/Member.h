#pragma once
#include<iostream>
#include<string>
#include"Book.h"
using namespace std;
class Member
{
	string name;
	int id;
public:Member(string name,int id):name(name),id(id){}
	  void borrowBook(Book *b) {
		  cout << "Member: " << name << " borrowed "
			  << b->getTitle() << endl;
	  }
};

