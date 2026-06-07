//#include<iostream>
//#include<string>
//#include<algorithm>
//using namespace std;
//int main() {
//	int n, k, left = 0, count = 0, maxLen1 = 0,maxLen2=0;
//	cin >> n >> k;
//	string str;
//	cin >> str;
//		for (int i = 0; i < n; i++)
//		{
//			if (str[i] == 'b') 
//				count++;
//			while (count > k) {
//				if (str[left] == 'b')
//					count--;
//				left++;
//			}
//			maxLen1 = max(maxLen1, i - left + 1);
//		}
//		left = 0, count = 0;
//		for (int i = 0; i < n; i++)
//		{
//			if (str[i] == 'a')
//				count++;
//			while (count > k) {
//				if (str[left] == 'a')
//					count--;
//				left++;
//			}
//			maxLen2 = max(maxLen2, i - left + 1);
//		}
//
//		if (maxLen1 > maxLen2)
//			cout << maxLen1;
//		else
//			cout << maxLen2;		
//}