//#include <iostream>
//#include <memory>
//#include <string>
//#include <vector>
//
//using namespace std;
//
//struct Student {
//	string name;
//	int age;
//
//};
//
//
//
//int main() {
////smart pointers frees the memory auotmatically when the smart pointer goes out of scope
////you do not need delete anymore
//
///*Unique pointers:
//    Owns a resource exclusively(no other pointer can own the same memory).
//	Memory is freed when the unique_ptr is destroyed.
//	Cannot be copied, only moved.
//*/
//	//int a = 10;
//	//unique_ptr<int> ptr = make_unique<int>(10);
//	//unique_ptr<int> ptr2 = ptr; //no other pointer can own the same memory
//	//unique_ptr<int> ptr3 = move(ptr);//that will move the ownership to ptr3
//	//which mean that ptr will point at nothing(nullptr) and ptr3 will point at the same location
//	//ptr was pointing at
//	//cout << *ptr << endl;
//	//cout << *ptr3;
//
//
//
//	/*cout << endl << "______________________________________ " << endl << endl;
//	int size;
//	cout << "enter size " << endl;
//	cin >> size;
//	unique_ptr<int[]> arrPtr = make_unique<int[]>(size);
//	for (int i = 0; i < size; i++)
//	{
//		cout << "enter element " << i + 1  << " :";
//		cin >> arrPtr[i];
//	} 
//	for (int i = 0; i < size; i++)
//	{
//		cout << "enter element " << i + 1 << " :" << arrPtr[i] << endl;
//	}*/
//	 
//    //no need for freeing the memory(delete)
//
//
//	cout << endl << "______________________________________ " << endl << endl;
///*Shared pointers:
//   Multiple pointers share the ownership of the same object
//   object is destroyed from heap when the last shared pointer goes out of scope
//   usecount function is used to maintain the interanl reference counter of the object
//*/
//	//int a = 5;
//	//shared_ptr<int> p1 = make_shared<int>(a);
//	//shared_ptr<int> p2 = p1;
//	//shared_ptr<int>p3 = p2;
//	//cout << "address p1 is pointing at is " << p1 << endl;
//	//cout << "address p2 is pointing at is " << p2 << endl;//same address
//
//	//cout << "value of p1 is " << *p1 << endl;
//	//cout << "value of p2 is " << *p2 << endl;
//	//cout<<p1.use_count()<<endl;
//	//cout << p2.use_count() << endl;
//	//cout << p3.use_count() << endl;
//
//	//ptsd->name is the same as (*ptsd).name
//
//
//	cout << endl << "______________________________________ " << endl << endl;
//	int n;
//	cout << "enter no of studdents ";
//	cin >> n;
//	Student* ptr = new Student[n];
//	Student* pcurr = ptr;
//	for (int i = 0; i < n; i++,pcurr++)
//	{
//		cout << "enter student no " << i + 1 << " :";
//		cin >> pcurr->name;
//		cin >> pcurr->age;
//	}
//	pcurr = ptr;
//	for (int i = 0; i < n; i++, pcurr++)
//	{
//		cout << "student no " << i + 1 << " :";
//		cout << pcurr->name;
//		cout << pcurr->age;
//	}
//	delete[]ptr;
//	ptr = nullptr;
//
//
//
//	vector<int> numbers = { 10, 20, 30 };
//	int num;
//
//	do {
//		cin >> num;
//		numbers.push_back(num);
//	} while (num > 0);
//
//	numbers.pop_back(); // remove last value (if needed)
//
//	for (int n : numbers) {
//		if (n >= 0)
//			cout << n << endl;
//	}
//
//
//
//
//}