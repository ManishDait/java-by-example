# Java By Example
Java by Example offers a collection of straightforward code snippets for various program in Java.

## Algorithms

### BubbleSort
```java
  public static int[] bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
      for (int j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          int temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
        
    return arr;
  }
```

### SelectionSort
```java
  public static int[] selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
      int small = i;
      for (int j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[small]) {
          small = j;
        }
      }
      int temp = arr[i];
      arr[i] = arr[small];
      arr[small] = temp;
    }
    return arr;
  }
```

### InsertionSort
```java
  public static int[] insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
      int curr = arr[i];
      int j = i - 1;

      while (j >= 0 && arr[j] > curr) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = curr;
    }
    return arr;
  }
```

### BinaySearch
```java
  public static int binarySearch(int[] arr, int target) {
    int start = 0;
    int end = arr.length - 1;
    
    while (start <= end) {
      int mid = (2 * start + end - start) / 2;

      if (arr[mid] == target) {
        return mid;
      }
      if (target > arr[mid]) {
        start = mid + 1;
      } else if (target < arr[mid]) {
        end = mid - 1;
      }
    }
    
    return -1;
  } 
``` 

### LinearSearch
```java
  public static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == target) { 
        return i;
      }
    }
    
    return -1;
  } 
```

## Array

### Find maximum number in array
```java
  public static int maxElement(int[] arr) {
    int max = Integer.MIN_VALUE;

    for (int i : arr) {
      if (i > max) {
        max = i;      
      }
    }

    return max;
  }
```

### Find sum of array
```java
  public static int sumOfArray(int[] arr) {
    int sum = 0;

    for (int i : arr) {
      sum += i;
    }

    return sum;
  }
```

### Find mean of array
```java
  public static double meanOfArray(int[] arr) {
    int sum = 0;

    for (int i : arr) {
      sum += i;
    }

    return sum / arr.length;
  }
```

### Find median of array
```java
  public static double findMedian(int[] arr) {
    if (arr.length % 2 == 0) {
      return (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2;
    }

    return arr[(arr.length / 2)];
  }
```


## Numbers

### Reverse a number
```java
  public static int reverseNumber(int num) {
    int rev = 0;

    while (num != 0) {
      int rem = num % 10;
      rev = rev * 10 + rem;
      num /= 10;
    }

    return rev;
  } 
```

### Palindrome 
```java
  public static boolean isPalindrome(int num) {
    int temp = num;
    int rev = 0;

    while (temp != 0) {
      int rem = temp % 10;
      rev = rev * 10 + rem;
      temp /= 10;
    }

    return num == rev;
  }
```

### Prime Number
```java
  public static boolean isPrime(int num) {
    if (num <= 1) {
      return false;
    }

    for (int i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        return false;
      }
    }

    return true;
  }
```

### Armstrong Number
```java
  public static boolean isArmstrong(int num) {
    int temp = num;
    int len = (int) Math.log10(temp) + 1;
    int newNum  = 0;

    while (num != 0) {
      int rem = num % 10;
      newNum += Math.pow(rem, len);
      num /= 10;
    }

    if (newNum == temp) {
      return true;
    }
    return false;
  }
```

### Factorial Of Number
```java
  public static int factorial(int num) {
    int fact = 1;
    for (int i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  } 
```

### Sum of N Number
```java
  public static int sumOfN(int num) {
    return num * (num + 1) / 2;
  } 
```

## Patterns

### Rectangle
```java
  /*
    ****
    ****
    ****
    **** 
  */
  public static void printRectangle(int n) {
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        System.out.print("*");
      }
      System.out.println("");
    }
  }
```

### Right Angle Triangle
```java
  /*
      *
      **
      ***
      ****
  */
  public static void printRightAngleTriangle(int n) {
    for (int i = 0; i < n; i++) {
      for (int j = 0; j <= i; j++) {
        System.out.print("*");
      }

      System.out.println("");
    }
  }
```

### Star Pyramid
```java
  /*
       *
      ***
     *****
    *******
  */
  public static void printPyramid(int n) {
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n - i - 1; j++) {
        System.out.print(" ");
      }

      for (int j = 0; j < 2 * i + 1; j++) {
        System.out.print("*");
      }
            
      for (int j = 0; j < n - i - 1; j++) {
        System.out.print(" ");
      }

      System.out.println("");
    }
  }
```

## Strings

### Character Count
```java
  public static int countCharacter(String str) {
    return str.length();
  }
```

### Reverse String
```java
  public static String reverseString(String str) {
    StringBuilder s = new StringBuilder(str);
    return s.reverse().toString();
  }
```

### Anagram Check
```java
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
```

### Count Occurence of Character
```java
  public static int countOccurence(String str, char c) {
    int count = 0;

    for (int i = 0; i < str.length(); i++) {
      if (str.charAt(i) == c) {
        count++;
      }
    }

    return count;
  }
```
