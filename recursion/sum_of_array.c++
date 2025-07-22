#include<iostream>

using namespace std;

int sumofarr(int arr[],int n){
    if(n == 0) return 0;

    return arr[n - 1] + sumofarr(arr,n - 1);
}

int main(){
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Sum: " << sumofarr(arr, n) << endl;
    return 0;
}