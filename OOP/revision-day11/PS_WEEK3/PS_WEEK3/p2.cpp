//#include <iostream>
//using namespace std;
//#include<vector>
//int main()
//{
//	int n, t;
//    cin >> n >> t;
//	vector<int> bookss(n);
//	int left = 0;
//	for (int i = 0;  i < n ; i++)
//	{
//		cin >> bookss[i];
//	}
//	int sum = 0,maxbookss=0;
//
//	for (int i = 0; i < n; i++)
//	{
//		sum += bookss[i];
//
//		if (sum > t) {
//			sum -= bookss[left];
//			left++;
//		}
//		maxbookss = i - left + 1;
//	}
//	cout << maxbookss;
//
//}
//
