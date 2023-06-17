package com.javabyexample.patterns;

public class StarPyramidSnippet {
    public static void printPyramid(int n){
        for(int i = 0; i < n; i++){
            //Print space
            for(int j = 0; j < n-i-1; j++){
                System.out.print(" ");
            }
            //Print star
            for(int j = 0; j < 2*i+1; j++){
                System.out.print("*");
            }
            //Print space
            for(int j = 0; j < n-i-1; j++){
                System.out.print(" ");
            }

            System.out.println("");
        }
    }
}
