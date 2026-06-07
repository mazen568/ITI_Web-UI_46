
#include <iostream>
using namespace std;
class Creature {
public :
    int y, z;

    //virtual void move() {
    //    cout << "creature moves" << endl;
    //}

    virtual void move() = 0;
};
class Human :public Creature {
public:
    int x;
    void move() {
        cout << "humam moves" << endl;

    }

};

class shape {
public :
   virtual int calcArea() {
        return 0;

    }
};

class rect :public shape {
public:
    int calcArea() {
        return 50;
    }
};

class circle:public shape {
public:
    int calcArea() {
        return 100;
    }
};
int main()
{
    Creature* c = new Human();
    //c->x = 10;//invalid because c points to human and human has creature inside it 
    //and creature does not have x
    c->move(); //creature moves because of the same reason as above , it prints the move function
    //of creature


    shape* p;
    rect myR;
    circle myC;
    p = &myR;
    cout << p->calcArea() << endl;
    p = &myC;
    cout << p->calcArea()<< endl;


}

