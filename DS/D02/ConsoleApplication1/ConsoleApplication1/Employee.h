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

    Employee(int id , string name , double salary )
        {
        this->id = id;
        this->name = name;
        this->salary = salary;
    }

    int getId()  { 
        return id; 
    }
    string getName()  { 
        return name; 
    }
    double getSalary()  { 
        return salary; 
    }

    void setId(int id) 
    { this->id = id; 
    }
    void setName(string name) 
    { 
        this->name= name; 
    }
    void setSalary(double salary) { 
        this->salary = salary; 
    }

    void display()  {
        cout << "ID: " << id << ", Name: " << name << ", Salary: " << salary << endl;
    }



};

