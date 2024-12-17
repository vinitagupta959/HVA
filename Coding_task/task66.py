# You are given an integer array and a target sum. Print a subarray that adds up to the target sum.
# If there are multiple possible subarrays, print the one that appears first and is smallest. And if, no such subarray is possible, print "Not Possible".
# A subarray is defined as a contiguous portion of an array.
# Sample Input 1: 
# 3 6 2 1 7
# 10
# Sample Output 1: 
# 2 1 7
# Explanation 1: 10 = 2+1+7. [2, 1, 7] is a subarray within the given array that adds up to 10.
# Sample Input 2: 
# 3 6 2 1 7
# 14
# Sample Output 2: 
# Not Possible
# Explanation 2: No subarray within the given array adds up to 14.



arr = list(map(int, input().split()))
target = int(input())
i = 0
find="Not Possible"
while i<len(arr):
    j=i
    sum=0
    arr1=[]
    while j<len(arr):
        sum+=arr[j]
        arr1+=[arr[j]]
        if sum==target:
            find=arr1
            break
        j+=1
    i+=1
if find==arr1:
    k=0
    while k<len(arr1):
        print(arr1[k],end=" ")
else:
    print(find)