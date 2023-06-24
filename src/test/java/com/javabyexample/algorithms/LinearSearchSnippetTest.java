package com.javabyexample.algorithms;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class LinearSearchSnippetTest {
    @Test
    public void testLinearSearch(){
        int arr[] = {1,45,2,31,4,7,45,12,45};

        assertEquals(5, LinearSearchSnippet.linearSearch(arr, 7));
    } 
}
