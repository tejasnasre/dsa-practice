#include<iostream>

using namespace std;

string reverse_str(string str){
    if(str.length() <= 1) return str;

    return str.back() + reverse_str(str.substr(0, str.length() - 1));
}

int main(){
    cout << reverse_str("hello") << endl;
    return 0;
}