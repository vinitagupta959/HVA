# You are given an integer array. Find the index of the minimum element of the array. If there are multiple occurrences of the minimum number, print the index of the first occurrence of the minimum number. 
# Note: The index will be calculated from 1.
arr=list(map(int,input().split()))
i=0
minnum=arr[0]
minIndex=0
while i<len(arr):
    if arr[i]<minnum:
        minIndex=i
        minnum=arr[i]
    i+=1
print(minIndex+1)