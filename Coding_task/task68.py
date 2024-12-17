# You are given an integer n and two integer arrays each of length n. Print all the common elements between these two arrays.
# Print the elements in an order as they appear in the first array. If one common element is repeated multiple times, print it just once. If there are no common elements, print No.
# Sample Input 1: 
# 7
# 4 9 2 5 7 4 3
# 9 6 4 8 6 1 12
# Sample Output 1: 
# 4 9
# Explanation 1: In the given arrays, 4 is repeating multiple times, but you need to print it just once. Also, the order of printing 4 and 9 are as per their appearance in the 1st array.

length=int(input())
arr=list(map(int,input().split()))
arr1=list(map(int,input().split()))
i=0
found=[]
while i<len(arr):
    j=0
    while j<len(arr1):
        if arr[i]==arr1[j]:
            k=0
            present=False
            while k<len(found):
                if found[k]==arr[i]:
                    present=True
                    break
                k+=1
            if not present:
                found+=[arr[i]]
        j+=1
    i+=1
if found==[]:
    print("No")
else:
    K=0
    while K<len(found):
        print(found[K],end=" ")
        K+=1
   

