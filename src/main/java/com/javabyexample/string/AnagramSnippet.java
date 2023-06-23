package com.javabyexample.string;

import java.util.Arrays;

public class AnagramSnippet {
    public static boolean checkAnagram(String a, String b) {
        int str1[] = new int[256];
        int str2[] = new int[256];

        if(a.length() != b.length()){
            return false;
        }

        for(int i = 0; i < a.length(); i ++){
            str1[a.charAt(i)]++;
            str2[b.charAt(i)]++;
        }

        return Arrays.equals(str1, str2);
    }
}
