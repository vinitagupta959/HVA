# You are given an integer array. You are also given a number. Print the number of times the number appears in the array.
arr=list(map(int, input().split()))
num=int(input())
i=0
count=0
while i<len(arr):
    if arr[i]==num:
        count+=1
    i+=1
print(count)