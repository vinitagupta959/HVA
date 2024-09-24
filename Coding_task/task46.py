# You are given an integer array. Find the minimum element of the array.
arr=list(map(int, input().split()))
i=0
min=arr[0]
while i<len(arr):
    if arr[i]<min:
        min=arr[i]
    i+=1
print(min)
