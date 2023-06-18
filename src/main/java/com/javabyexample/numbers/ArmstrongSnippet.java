package com.javabyexample.numbers;

public class ArmstrongSnippet {
   public static boolean isArmstrong(int num){
    int temp = num;
    int len = (int)Math.log10(temp)+1;
    int newNum  = 0;

    while(num != 0){
        int rem = num%10;
        newNum += Math.pow(rem, len);
        num /= 10;
    }

    if(newNum == temp){
        return true;
    }
    return false;
   } 
}
