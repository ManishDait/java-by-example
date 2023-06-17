package com.javabyexample.algorithms;

public class BinarySearchSnippet {
   public static int binarySearch(int arr[], int target){
    int start = 0;
    int end = arr.length-1;
    
    while(start <= end){
        int mid = (2*start + end -start) / 2;

        if(arr[mid] == target){
            return mid;
        }
        if(target > arr[mid]){
            start = mid+1;
        }
        else if(target < arr[mid]){
            end = mid-1;
        }
    }
    
    return -1;
   } 
}
