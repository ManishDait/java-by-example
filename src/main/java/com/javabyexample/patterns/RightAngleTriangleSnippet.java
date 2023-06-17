package com.javabyexample.patterns;

public class RightAngleTriangleSnippet {
    public static void printRightAngleTriangle(int n){
        for(int i = 0; i < n; i++){
            for(int j = 0; j <= i; j++){
                System.out.print("*");
            }

            System.out.println("");
        }
    } 
}
