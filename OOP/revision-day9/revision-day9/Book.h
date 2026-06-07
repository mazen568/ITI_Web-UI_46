#pragma once
#include<iostream>
#include"Author.h"
#include<string>
using namespace std;
class Book
{
	string title;
	int year;
	//Author* author; //composition,raw pointer
	Author author;

public:
	Book(string title,int year,string name,string nationality):title(title),year(year),author(name, nationality)
	{
		//author = new Author(name, nationality);//raw pointer
	}

	string getAuthorNationality() {
		//return (*author).getNationality(); //raw pointer
		return author.getNationality();
	}

	string getAuthorName() {
		//return author->getName();//raw pointer;
		return author.getName();
	}

	string getTitle() { 
		return title; 
	}
	int getYear() { 
		return year; 
	}
	~Book() {
		//delete author;//raw pointer
	}
};

