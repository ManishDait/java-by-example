package com.javabyexample.strings;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.javabyexample.string.OccurenceOfCharacterSnippet;

public class OccurenceOfCharacterSnippetTest {
    @Test
    public void testCountOccurence(){
        int expected = 2;
        assertEquals(expected, OccurenceOfCharacterSnippet.countOccurence("Hello", 'l'));

        int expected2 = 0;
        assertEquals(expected2, OccurenceOfCharacterSnippet.countOccurence("Hello", 'i'));
    }
}
