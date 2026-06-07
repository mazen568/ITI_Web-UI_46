#include <iostream>
#include <conio.h>
#include <windows.h>
using namespace std;

int main() {
    int pos = 0;
    char ch;

    while (true) {
        system("cls");
        cout << "Employee Form\n";
        cout << "_________________\n\n";

        string menu[4] = {"New", "Display one", "Display all", "Exit"};

        for (int i = 0; i < 4; i++) {
            if (i == pos)
                cout << "\033[31m" << menu[i] << "\033[0m" << endl;
            else
                cout << menu[i] << endl;
        }

        ch = _getch(); // get key

        // ESC key (code 27)
        if (ch == 27)
            break;

        else if (ch == -32) {
            ch = _getch();
            if (ch == 72) { //up
                pos--;
                if (pos < 0) pos = 3;
            }
            else if (ch == 80) { //down
                pos++;
                if (pos > 3) pos = 0;
            }
        }

        else if (ch == 13) {
            system("cls");

            if (pos == 0)
                cout << "You selected: NEW\n";
            else if (pos == 1)
                cout << "You selected: DISPLAY ONE\n";
            else if (pos == 2)
                cout << "You selected: DISPLAY ALL\n";
            else if (pos == 3) {
                cout << "Goodbye!\n";
                break; // exit loop and end program
            }

            cout << "\nPress any key to return to menu...";
            _getch(); // wait for key press before returning
        }
    }

    return 0;
}
