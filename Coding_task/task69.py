# You are given an integer array. Print all the subarrays.
# A subarray is defined as a contiguous portion of an array.
# Print the subarrays in an order specified in the sample input / output.
# Sample Input: 
# 3 2 1
# Sample Output: 
# 3
# 3 2
# 3 2 1
# 2
# 2 1
# 1

arr = list(map(int, input().split()))
i=0
j=0
k=0
while i<len(arr):
    k=i
    j=i
    while k<len(arr):
        while j<=k:
            print(arr[j],end=" ")
            j+=1
        k+=1
        j=i 
        print()
    i+=1
    
        
    

