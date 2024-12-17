# You are given an array of integers. Calculate the sum of absolute differences between all pairs of numbers in the array.
# Sample Input:
# 7 3 6 4
# Sample Output:
# 14
# Explanation: 
# Absolute difference between 7 and 3 = 4
# Absolute difference between 7 and 6 = 1
# Absolute difference between 7 and 4 = 3
# Absolute difference between 3 and 6 = 3
# Absolute difference between 3 and 4 = 1
# Absolute difference between 6 and 4 = 2
# Sum of absolute differences between all pairs: 4+1+3+3+1+2 = 14

arr=list(map(int, input().split()))
sum=0
i=0
while i<len(arr)-1:
    j=i+1
    while j<len(arr):
        if arr[i]>=arr[j]:
            sum+=arr[i]-arr[j]
            print(arr[i], arr[j], sum)
        else:
            sum+=arr[j]-arr[i]
        j+=1
    i+=1
print(sum)
