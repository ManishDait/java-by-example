package com.javabyexample.strings;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.javabyexample.string.AnagramSnippet;

public class AnagramSnippetTest {
    @Test
    public void testAnagram(){
        boolean expected = true;
        assertEquals(expected, AnagramSnippet.checkAnagram("care", "race"));

        boolean expected2 = false;
        assertEquals(expected2, AnagramSnippet.checkAnagram("cat", "eat"));
    }
}
