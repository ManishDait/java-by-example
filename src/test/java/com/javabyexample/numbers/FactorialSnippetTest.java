package com.javabyexample.numbers;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class FactorialSnippetTest {
    @Test
    public void testFactorial(){
        int expected = 120;
        assertEquals(expected, FactorialSnippet.factorial(5));
    } 
}
