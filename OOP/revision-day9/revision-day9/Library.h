#pragma once
#include<iostream>
#include"Book.h"
#include<vector>
using namespace std;
class Library
{
	vector<Book*> books;
public:
	/*void addBook(Book& book) {
		books.push_back(&book);
	}*/
	void addBook(Book* book) {
		books.push_back(book);
	}

	void booksList() {
		for (Book *book:books)
		{
			cout << "book author name: " << book->getAuthorName() << " book author nation: " << book->getAuthorNationality() << endl;
		}
	}
};

