package com.javabyexample.numbers;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class ReverseNumberSnippetTest {

    @Test
    public void testReverseNumber(){
        int num1 = 1234;
        assertEquals(4321, ReverseNumberSnippet.reverseNumber(num1));

        int num2 = 3456;
        assertEquals(6543, ReverseNumberSnippet.reverseNumber(num2));
    }
    
}
