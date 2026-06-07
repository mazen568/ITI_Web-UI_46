#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<long long> cities(n);
    vector<long long> towers(m);

    for (int i = 0; i < n; i++)
        cin >> cities[i];

    for (int i = 0; i < m; i++)
        cin >> towers[i];

    int j = 0;
    long long ans = 0;

    for (int i = 0; i < n; i++) {
        while (j + 1 < m &&
            abs(cities[i] - towers[j]) >= abs(cities[i] - towers[j + 1])) {
            j++;
        }

        ans = max(ans, abs(cities[i] - towers[j]));
    }

    cout << ans;
}