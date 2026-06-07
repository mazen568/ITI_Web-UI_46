#include<iostream>
#include"Book.h"
#include"Library.h"
#include"Member.h"
#include"Author.h"
using namespace std;
int main() {
    //problem1
   Book b1("book1", 1997, "mazen", "Egyptian");
   Book b2("book2", 1937, "mohamed", "Spanish");
   Library lib;
   lib.addBook(&b1);
   lib.addBook(&b2);
   lib.booksList();

 /*  
   cout << "copy Constructor "<< endl;
   Book b3 = b1;  
   cout << "b3 title: " << b3.getTitle()<< " author: " << b3.getAuthorName()<< " nationality: " << b3.getAuthorNationality() << " year: " << b3.getPubYear() << endl;
   cout << "assignment Operator " << endl;
   b3 = b2;       
   cout << "b3 after assignment title: " << b3.getTitle() << " author: " <<  b3.getAuthorName() << " nationality: " << b3.getAuthorNationality() <<" year: " << b3.getPubYear() << endl;
   lib.addBooks(b3);
   cout << "after adding copied book " << endl;
   lib.listBooks();*/

}