#include<iostream>
#include<vector>

using namespace std;

void bubble_sort(vector<int> &arr,int n){
    bool swapped;
    for(int i = 0; i < n - 1; i++){
       swapped = false;
        for(int j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr[j],arr[j+1]);
                swapped = true;
            }
        }
        if(!swapped) break;
    }
}

void insertion_sort(vector<int> &arr,int n){
    for(int i = 1; i < n; i++){
        int key = arr[i];
        int j = i - 1;
        
        while(arr[j] >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

void printarr(vector<int> arr,int n){
    for(int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }
}

int main(){
    vector<int> arr = {4,54,5,7,8,32,68,9};
    int n = arr.size();

    // bubble_sort(arr,n);
    insertion_sort(arr,n);
    printarr(arr,n);
    return 0;
}