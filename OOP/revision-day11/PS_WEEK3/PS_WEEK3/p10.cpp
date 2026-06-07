//#include <iostream>
//using namespace std;
//#include<vector>
//
//#include<algorithm>
//int main()
//{
//	int n, k;
//	cin >> n >> k;
//	vector<int> planks(n);
//	int left = 0;
//	for (int i = 0; i < n; i++)
//	{
//		cin >> planks[i];
//	}
//	int sum = 0, count = 0,mn=999999999,j=0;
//
//	for (int i = 0; i < n; i++)
//	{
//		sum += planks[i];
//		if (i-left+1==k) {
//			if (sum < mn)
//			{
//				mn = sum;
//				j = left+1;
//			}
//
//			sum -= planks[left];
//			left++;
//		}
//	}
//
//	cout << j;
//
//
//}
//
