// max and min num in array
//https://www.geeksforgeeks.org/dsa/maximum-and-minimum-in-an-array/

#include<iostream>
#include<vector>
#include<climits>
#include<algorithm>

using namespace std;

int min(vector<int> &arr,int n){
    int min = INT_MAX;
    for(int i = 0; i < n; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

int max(vector<int> &arr,int n){
    int max = INT_MIN;
    for(int i = 0; i < n; i++){
        if(arr[i] > max){
            max = arr[i];
        }        
    }
    return max;
}

struct MINMAX{
    int max;
    int min;
};

MINMAX minmax_sort(vector<int> &arr,int n){
    MINMAX minmaxelem;

    sort(arr.begin(), arr.end());

    minmaxelem.min = arr[0];
    minmaxelem.max = arr[n - 1];

    return minmaxelem;
}

// using sorting

int main(){
    vector<int> arr = {2,3,45,65,12,55,2,5,21,56,32};
    int n = arr.size();

    // int maxnum = max(arr,n);
    // int minnum = min(arr,n);
    // // o(n) and o(1)
    // cout << "max num is: " << maxnum << endl;
    // cout << "min num is: " << minnum << endl;

    MINMAX minmaxelem = minmax_sort(arr,n);
    // o(log n)
    cout << "Minimum element is " << minmaxelem.min << endl;
    cout << "Maximum element is " << minmaxelem.max << endl;
    return 0;
}