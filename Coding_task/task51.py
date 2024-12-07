# You are given an integer array. Take another number as input and search if the number is present in the given array. If the number is present, print "Yes", else print "No".
# Sample Input 1:
# 11 1 13 21 3 7
# 3
# Sample Output 1:
# Yes

arr=list(map(int,input().split()))
target=int(input())
i=0
result="no"
while i<len(arr):
    if arr[i]==target:
        result="yes"
        break 
    i+=1
print(result)