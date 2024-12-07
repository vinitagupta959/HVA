# You are given an integer array. Add all the numbers present in the array and print the sum.
arr=list(map(int, input().split()))
i=0
result=0
while i<len(arr):
    result+=arr[i]
    i+=1
print(result)