package com.javabyexample.patterns;

public class RectangularStarPatternSnippet {
    public static void printRectangle(int n){
        for(int i = 0; i < n; i++){
            for(int j = 0; j < n; j++){
                System.out.print("*");
            }
            System.out.println("");
        }
    } 
}
