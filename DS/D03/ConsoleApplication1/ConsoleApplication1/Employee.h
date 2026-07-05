#pragma once
#include<string>
#include<iostream>
using namespace std;
class Employee
{
public:

    int id;
    string name;
    double salary;

    Employee() {
        id = 0;
        name = "";
        salary = 0;
    }

    Employee(int id, string name, double salary)
    {
        this->id = id;
        this->name = name;
        this->salary = salary;
    }
};

