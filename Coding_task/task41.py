# You are given an integer array. Print the number of odd numbers in the array.
arr=list(map(int, input().split()))
i=0
count=0
while i<len(arr):
    if arr[i]%2!=0:
        count+=1
    i+=1
print(count)

