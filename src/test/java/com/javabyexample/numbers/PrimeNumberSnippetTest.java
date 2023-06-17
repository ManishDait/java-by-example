package com.javabyexample.numbers;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class PrimeNumberSnippetTest {
    
    @Test
    public void testPrimeNumberSnippet(){
        int num1 = 2;
        assertEquals(true, PrimeNumberSnippet.isPrime(num1));

        int num2 = 34;
        assertEquals(false, PrimeNumberSnippet.isPrime(num2));
    }

}
