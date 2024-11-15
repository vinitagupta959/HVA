# You are given an integer array. Traverse through the array and print the square for each element.

arr = list(map(int, input().split()))
i=0
while i<len(arr):
    print(arr[i]**2,end=" ")
    i+=1
