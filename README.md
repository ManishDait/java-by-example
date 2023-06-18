# Java By Example
Java by Example is a collection of various code snippet in java.

## Algorithms

### BinaySearch
```java
public static int binarySearch(int arr[], int target){
    int start = 0;
    int end = arr.length-1;
    
    while(start <= end){
        int mid = (2*start + end -start) / 2;

        if(arr[mid] == target){
            return mid;
        }
        if(target > arr[mid]){
            start = mid+1;
        }
        else if(target < arr[mid]){
            end = mid-1;
        }
    }
    
    return -1;
} 
``` 

### LinearSearch
```java
public static int linearSearch(int arr[], int target){
    for(int i = 0; i < arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
    
    return -1;
} 
```


## Numbers

### Reverse a number
```java
public static int reverseNumber(int num) {
    int rev = 0;

    while(num != 0){
        int rem = num % 10;
        rev = rev * 10 + rem;
        num /= 10;
    }

    return rev;
} 
```

### Palindrome 
```java
public static boolean isPalindrome(int num){
    int temp = num;
    int rev = 0;

    while(temp != 0){
        int rem = temp % 10;
        rev = rev * 10 + rem;
        temp /= 10;
    }

    return num == rev;
} 
```

### Prime Number
```java
public static boolean isPrime(int num){
    if(num <= 1){
        return false;
    }

    for(int i = 2; i <= num / 2; i++){
        if(num % i == 0){
            return false;
        }
    }

    return true;
}
```

### Armstrong Number
```java
public static boolean isArmstrong(int num){
    int temp = num;
    int len = (int)Math.log10(temp)+1;
    int newNum  = 0;

    while(num != 0){
        int rem = num%10;
        newNum += Math.pow(rem, len);
        num /= 10;
    }

    if(newNum == temp){
        return true;
    }
    return false;
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
public static void printRectangle(int n){
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
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
public static void printRightAngleTriangle(int n){
    for(int i = 0; i < n; i++){
        for(int j = 0; j <= i; j++){
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
public static void printPyramid(int n){
        for(int i = 0; i < n; i++){
        for(int j = 0; j < n-i-1; j++){
            System.out.print(" ");
        }

        for(int j = 0; j < 2*i+1; j++){
            System.out.print("*");
        }

        for(int j = 0; j < n-i-1; j++){
            System.out.print(" ");
        }
        System.out.println("");
    }
}
```

## Strings

### Character Count
```java
public static int countCharacter(String str){
    return str.length();
} 
```
