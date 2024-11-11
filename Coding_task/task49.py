# You are given an integer array. Count all the numbers present in the array till you encounter a negative number and print the count. If no negative number is present, count till the end.
# Sample Input: 
# 10 5 6 3 -1 4 -3 5 6
# Sample Output: 
# 4


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
