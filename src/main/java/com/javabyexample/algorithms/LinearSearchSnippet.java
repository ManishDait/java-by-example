package com.javabyexample.algorithms;

public class LinearSearchSnippet {
   public static int linearSearch(int arr[], int target){
    for(int i=0; i<arr.length; i++){
        if(arr[i] == target)
            return i;
    }
    
    return -1;
   } 
}
