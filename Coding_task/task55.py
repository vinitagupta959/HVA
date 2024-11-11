# You are given an array of integers and another integer K. Print the first element of the array that is greater than K. If there are no elements greater than K, print No.
# Sample Input 1:
# 3 5 10 25 16 12 14
# 11
# Sample Output 1:
# 25

arr=list(map(int,input().split()))
k=int(input())
i=0
result="no"
while i<len(arr):
    if arr[i]>k:
        result=arr[i]
        break
    i+=1
print(result)
