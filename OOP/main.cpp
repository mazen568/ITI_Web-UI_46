#include <iostream>
using namespace std;

int main()
{
    // 1
    string name, city;
    int age;
    cout << "enter name : " << endl;
    cin >> name;
    cout << "enter age : " << endl;
    cin >> age;
    cout << "enter city : " << endl;
    cin >> city;
    cout << "name : " << name << endl;
    cout << "age : " << age << endl;
    cout << "city : " << city << endl;

    //2
    int num1, num2;
    cout << "enter 2 numbers" << endl;
    cin >> num1 >> num2;
    int sum = num1 + num2;
    int difference = num1 - num2;
    float average = (num1 + num2) / 2.0;
    cout << "sum : " << sum << endl;
    cout << "difference: " << difference << endl;
    cout << "average : " << average << endl;

    // 3
    int number;
    cout << "enter number: " << endl;
    cin >> number;
    cout << "hexadecimal: " << hex << number << endl;
    cout << "octal: " << oct << number << endl;

    // 4
    char character;
    cout << "enter character : " << endl;
    cin >> character;
    cout << "character : " << character << endl;
    cout << "ascii : " << int(character)<< endl;
    cout << "ascii : " << static_cast<int>(character) << endl;

    return 0;
}
