#include<iostream>
#include<vector>

using namespace std;

int kth_smallest_bubble(vector<int> &arr,int n,int k){
    // bubble sort
    for(int i = 0; i < n; i++){
        for(int j = i + 1; j < n; j++){
            if(arr[i] > arr[j]){
                swap(arr[i],arr[j]);
            }
        }
    }
    return arr[k - 1];
}

int kth_smallest_insertion(vector<int> &arr,int n,int k){
    for(int i = 1; i < n; i++){
        int key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr[k - 1];
}

int main(){
    vector<int> arr = {54,6,3,2,56,3};
    int n = arr.size();
    int k = 4;

    // int result = kth_smallest_bubble(arr,n,k);
    int result = kth_smallest_insertion(arr,n,k);
    cout << result << endl;
    return 0;
}