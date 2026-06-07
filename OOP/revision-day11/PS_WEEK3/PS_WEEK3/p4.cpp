//#include<iostream>
//#include<unordered_map>
//#include<set>
//#include<string>
//#include<algorithm>
//using namespace std;
//int main() {
//
//	int n;
//	string str;
//	cin >> n;
//	cin >> str;
//	set<char> unique;
//	for (char c:str)
//	{
//		unique.insert(c);
//	}
//	int uniqueSize = unique.size();
//	int left = 0,formed=0,mn=999999;
//	unordered_map<char, int> mp;
//	for (int i = 0; i < n; i++)
//	{
//		mp[str[i]]++;
//		if (mp[str[i]] == 1)
//			formed++;
//		while (formed == uniqueSize) {
//			mn = min(mn, i - left + 1);
//			mp[str[left]]--;
//			if (mp[str[left]] == 0)
//				formed--;
//			left++;
//		}
//	}
//	cout << mn;
//}