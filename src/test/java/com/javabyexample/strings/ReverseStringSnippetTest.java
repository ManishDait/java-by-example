package com.javabyexample.strings;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.javabyexample.string.ReverseStringSnippet;

public class ReverseStringSnippetTest {
    @Test
    public void testReverseString(){
        String expected = "olleH";
        assertEquals(expected, ReverseStringSnippet.reverseString("Hello"));
    }
}
