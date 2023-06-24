package com.javabyexample.algorithms;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class SelectionSortSnippetTest {
    @Test
    public void testSelectionSort(){
        int arr[] = {34,2,12,7,53};
        arr = SelectionSortSnippet.selectionSort(arr);

        assertEquals(2, arr[0]);
        assertEquals(7, arr[1]);
        assertEquals(12, arr[2]);
        assertEquals(34, arr[3]);
        assertEquals(53, arr[4]);
    } 
}
