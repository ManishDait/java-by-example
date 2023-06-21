package com.javabyexample.algorithms;

public class BubbleSortSnippet {
    public static int[] bubbleSort(int[] arr){
        for(int i = 0; i < arr.length-1; i++){
            for(int j = i+1; j < arr.length; j++){
                if(arr[i] > arr[j]){
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        
        return arr;
    }
}
