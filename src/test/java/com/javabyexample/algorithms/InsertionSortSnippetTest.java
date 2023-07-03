/*
 * MIT License
 * 
 * Copyright (c) 2023 Manish Dait
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

package com.javabyexample.algorithms;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

/**
 * Test for Java-By-Example code Library.
 * 
 */

public class InsertionSortSnippetTest {
  /**
   * Test for {@link InsertionSortSnippet#insertionSort(int[])}.
   */
  @Test
  public void testBubbleSort() {
    int[] arr = {34, 2, 12, 7, 53};
    arr = InsertionSortSnippet.insertionSort(arr);

    assertEquals(2, arr[0]);
    assertEquals(7, arr[1]);
    assertEquals(12, arr[2]);
    assertEquals(34, arr[3]);
    assertEquals(53, arr[4]);
  }
}
