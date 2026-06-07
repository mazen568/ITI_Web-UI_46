//#include<iostream>
//#include<vector>
//using namespace std;
//int main() {
//
//	int n;
//	cin >> n;
//	int left=0, right = n - 1;
//	vector<int> cards(n);
//	for (int i = 0; i < n; i++)
//	{
//		cin >> cards[i];
//	}
//	bool seraja = true, dima = false;
//	int serajaPointss=0, dimaPointss = 0;
//	while (left <= right) {
//		if (cards[left] > cards[right]) {
//			if (seraja)
//			{
//				serajaPointss += cards[left];
//				seraja = false;
//				dima = true;
//			}
//			else
//			{
//				 dimaPointss += cards[left];
//				 seraja = true;
//				 dima = false;
//			}
//			left++;
//
//		}
//		else {
//			if (seraja)
//			{
//				serajaPointss += cards[right];
//				seraja = false;
//				dima = true;
//			}
//			else
//			{
//				dimaPointss += cards[right];
//				seraja = true;
//				dima = false;
//			}
//			right--;
//		}
//	}
//	cout << serajaPointss << " " << dimaPointss;
//}