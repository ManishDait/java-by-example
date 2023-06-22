package com.javabyexample.string;

public class ReverseStringSnippet {
    public static String reverseString(String str){
        StringBuilder s = new StringBuilder(str);
        return s.reverse().toString();
    }
}
