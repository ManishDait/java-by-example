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

package com.javabyexample.string;

import java.util.Arrays;

/**
 * AnagramSnippet.
 */

public class AnagramSnippet {
  /**
   * Check if strings are Anagram or not.
   *
   * @param a String a
   * @param b String b
   * @return boolean value true if strings are anagram else false
   */
  public static boolean checkAnagram(String a, String b) {
    int[] str1 = new int[256];
    int[] str2 = new int[256];

    if (a.length() != b.length()) {
      return false;
    }

    for (int i = 0; i < a.length(); i++) {
      str1[a.charAt(i)]++;
      str2[b.charAt(i)]++;
    }

    return Arrays.equals(str1, str2);
  }
}
