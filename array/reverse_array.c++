// reverse an array
// https://www.geeksforgeeks.org/dsa/program-to-reverse-an-array/

#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

// reverse an array temp array approach
void reverse_array_temp(vector<int> &arr){
    int n = arr.size();

    vector<int> temp(n);

    for(int i = 0; i < n; i++)
        temp[i] = arr[n - i - 1];
    

    for(int i = 0; i < n; i++)
        arr[i] = temp[i];
    
}

// reverse an array two pointers
void reverse_array_two_pointers(vector<int> &arr){
    int n = arr.size();
    int left = 0;
    int rigth = n - 1;

    while(left < rigth){
        swap(arr[left],arr[rigth]);

        left++;
        rigth--;
    }
}

void swapping_element(vector<int>& arr){
    int n = arr.size();
    
    for(int i = 0; i < n/2; i++){
        swap(arr[i],arr[n - i -1]); // odd and even array both
    }
}

void reverse_array_recursive(vector<int>& arr,int l,int r){
    if(l>=r)
        return;

    swap(arr[l],arr[r]);

    reverse_array_recursive(arr,l + 1, r - 1);
}

void inbuilt_reverse_array(vector<int>& arr){
    reverse(arr.begin(),arr.end());
}

int main(){
    vector<int> arr = {1,2,4,5};
    int n = arr.size();
    // reverse_array_temp(arr);
    // o(n) time and space both

    // reverse_array_two_pointers(arr);
    // o(n) time complexity o(1) space complexity

    // swapping_element(arr);
    // o(n) time complexity o(1) space complexit

    // reverse_array_recursive(arr,0,n-1);
    // o(n) both

    // inbuilt_reverse_array(arr);
    // o(n) o(1)

    for(int val : arr) 
        cout << val << " ";

    return 0;
}