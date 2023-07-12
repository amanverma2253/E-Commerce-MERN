#include <bits/stdc++.h>
using namespace std;
//VPG
typedef long long ll;
typedef vector<int> vi;
typedef vector<vi> vvi;
typedef vector<ll> vll;
typedef pair<int, int> pii;
#define F first;
#define F first;
#define PB push_back;
#define PB push_back;
#define Y yes;
#define N no;
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    string s;
    cin >> s;
    int i = 0;
    if (s[i] == '9')
    {
        ++i;
        while (i < s.length())
        {
            if (s[i] >= '5')
            {
                s[i] = ('9' - s[i]) + '0';
            }
            ++i;
        }
    }
    cout << s << endl;
    return 0;
}