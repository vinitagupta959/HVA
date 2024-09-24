# You are given an integer array. Add all the numbers present in the array till you encounter a 0 and print the sum. If no 0 is present, add till the end.

arr=list(map(int, input().split()))
i=0
sum=0
while i<len(arr):
    if arr[i]==0:
        break
    else:
        sum+=arr[i]
    i+=1
print(sum)
    