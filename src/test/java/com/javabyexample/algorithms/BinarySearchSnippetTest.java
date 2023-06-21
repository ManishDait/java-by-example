package com.javabyexample.algorithms;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class BinarySearchSnippetTest {
    @Test
    public void testBinarySearch(){
        int arr[] = {2,5,23,67,433};
        assertEquals(2, BinarySearchSnippet.binarySearch(arr, 23));
    } 
}
