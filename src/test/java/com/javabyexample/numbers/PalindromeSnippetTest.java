package com.javabyexample.numbers;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class PalindromeSnippetTest {
   
    @Test
    public void testPalindromeSnippet(){
        int num1 = 121;
        assertEquals(true, PalindromeSnippet.isPalindrome(num1));

        int num2 = 234;
        assertEquals(false, PalindromeSnippet.isPalindrome(num2));
    }
    
}
