# You are given an integer array. Find the minimum element of the array.
arr=list(map(int,input().split()))
i=0
minnum=arr[0]
minIndex=0
while i<len(arr):
    if arr[i]<minnum:
        minIndex=i
        minnum=arr[i]
    i+=1
print(minIndex)
