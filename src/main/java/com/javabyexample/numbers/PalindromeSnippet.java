package com.javabyexample.numbers;

public class PalindromeSnippet {
    public static boolean isPalindrome(int num){
        int temp = num;
        int rev = 0;

        while(temp != 0){
            int rem = temp % 10;
            rev = rev * 10 + rem;
            temp /= 10;
        }

        return num == rev;
    } 
}
