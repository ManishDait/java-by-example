package com.javabyexample.strings;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.javabyexample.string.CharacterCountSnippet;

public class CharacterCountSnippetTest {
    @Test
    public void testCharacterCount(){
        int expected = 5;
        assertEquals(expected, CharacterCountSnippet.countCharacter("Hello"));
    }
}
