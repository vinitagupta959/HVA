# You are given an integer array. Add all the numbers present in the array and print the sum.
arr=list(map(int, input().split()))
i=0
sum=0
while i<len(arr):
    sum+=arr[i]
    i+=1
print(sum)