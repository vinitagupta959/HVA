# You are given an integer array. Count all the numbers present in the array till you encounter a negative number and print the count. If no negative number is present, count till the end.

arr=list(map(int, input().split()))
i=0
count=0
while i<len(arr):
    if arr[i]>=0 :
        count+=1
    else:
        break
    i+=1
print(count)
