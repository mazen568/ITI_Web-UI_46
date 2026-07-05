

#include <iostream>
#include"SortedDLL.h"
#include"DLL.h"
#include"StackDLL.h"

using namespace std;



int main()
{

 //   SortedDLL list;
 //   list.insertNode(Employee(1, "mazen", 5000));
 //   list.insertNode(Employee(3, "omar", 7000));
	//list.insertNode(Employee(2, "mohamed", 6000));
	//SortedDLL list2 = list;
	//list2.displayAll();
	//SortedDLL list3;
	//list3.insertNode(Employee(5, "kla;jsd", 110));
	//list3.insertNode(Employee(7, "a;'lasdr", 2000));
	//list3.insertNode(Employee(9, ";'ldsa", 60040));
	//list3 = list2;
	//list3.displayAll();
 //   cout << "number of nodes: " << list.NodeCount() << endl; 
	//list.displayNode(2);
	//Employee e = list[1];   
	//e.display();
 //   cout << "All Employees:" << endl;
 //   list.displayAll();
	//list.freeList();
	//cout << "number of nodes after free: " << list.NodeCount() << endl;



	//DLL list;
	//list.appendNode(Employee(1, "mazen", 5000));
	//list.appendNode(Employee(3, "omar", 7000));
	//list.appendNode(Employee(2, "mohamed", 6000));
	//Employee e = list[2];
	//e.display();
	//cout << "All Employees:" << endl;
	//list.displayAll();
	//list.freeList();
	//cout << "number of nodes after free: " << list.NodeCount() << endl; 



	StackDLL s;
	s.push(Employee(1, "mazen", 5000));
	s.push(Employee(3, "omar", 7000));
	s.push(Employee(2, "mohamed", 6000));
	s.pop();
	cout << "stack : " << endl;
	s.displayAll();
	s.peek()->data.display();
	cout << "count: " << s.NodeCount() << endl; 




    return 0;
}

