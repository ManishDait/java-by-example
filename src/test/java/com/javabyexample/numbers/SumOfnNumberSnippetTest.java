package com.javabyexample.numbers;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class SumOfnNumberSnippetTest {
   @Test
   public void testSumOfN(){
    int expected = 21;
    assertEquals(expected, SumOfnNumberSnippet.sumOfN(6));
   } 
}
