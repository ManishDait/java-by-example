package com.javabyexample.alhorithms;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.javabyexample.algorithms.BinarySearchSnippet;

public class BinarySearchSnippetTest {
    @Test
    public void testBinarySearch(){
        int arr[] = {2,5,23,67,433};
        assertEquals(2, BinarySearchSnippet.binarySearch(arr, 23));
    } 
}
