package com.javabyexample.numbers;

public class ReverseNumberSnippet {
   public static int reverseNumber(int num) {
      int rev = 0;

      while(num != 0){
         int rem = num % 10;
         rev = rev * 10 + rem;
         num /= 10;
      }

      return rev;
   } 
}
