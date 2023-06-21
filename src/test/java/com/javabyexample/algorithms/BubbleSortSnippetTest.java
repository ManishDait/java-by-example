package com.javabyexample.algorithms;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class BubbleSortSnippetTest {
    @Test
    public void testBubbleSort(){
        int arr[] = {34,2,12,7,53};
        arr = BubbleSortSnippet.bubbleSort(arr);

        assertEquals(2, arr[0]);
        assertEquals(7, arr[1]);
        assertEquals(12, arr[2]);
        assertEquals(34, arr[3]);
        assertEquals(53, arr[4]);
    }
}
