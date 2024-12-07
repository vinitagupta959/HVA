# You are given an integer array. You are also given a number. Print the number of times the number appears in the array.
value=list(map(int,input().split()))
num=value[-1]
arr=value[:-1]
i=0
count=0
while i<len(arr):
    if arr[i]==num:
        count+=1
    i+=1
print(count)