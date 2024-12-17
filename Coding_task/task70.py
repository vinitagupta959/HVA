# You are given an integer array. Print the sum of all possible subarrays.
# A subarray is defined as a contiguous portion of an array.
# Sample Input: 
# 3 7 5
# Sample Output: 
# 52
# Explanation: All the subarrays are:
# 3
# 3,7
# 3,7,5
# 7
# 7,5
# 5
# Sum = 3 + (3+7) + (3+7+5) + 7 + (7+5) + 5 = 52

arr = list(map(int, input().split()))
i=0
j=0
k=0
sum=0
while i<len(arr):
    k=i
    j=i
    while k<len(arr):
        while j<=k:
            sum+=arr[j]
            j+=1
        k+=1
        j=i 
    i+=1
print(sum)