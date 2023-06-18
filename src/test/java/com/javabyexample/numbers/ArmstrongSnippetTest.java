package com.javabyexample.numbers;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class ArmstrongSnippetTest {
    @Test
    public void testIsArmstrong(){
        boolean expected = true;
        assertEquals(expected, ArmstrongSnippet.isArmstrong(1634));

        boolean expected2 = false;
        assertEquals(expected2, ArmstrongSnippet.isArmstrong(123));
    } 
}
