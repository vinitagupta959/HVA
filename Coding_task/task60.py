# You are given an array of integers. Find the minimum and maximum difference between any two elements in an array.
# Sample Input:
# 5 4 7 8 4 6 11 9
# Sample Output:
# 0 7
# Explanation: Minimum Difference: 4 - 4 = 0. Maximum Difference: 11 - 4 = 7

arr = [5, 4, 7, 8, 4, 6, 11, 9]
if len(arr) == 0:
    print("0 0")
else:
    minDiffrence=float('inf')
    maxDiffrence=float('-inf')

    i=0
    while i <len(arr):
        j=0
        while j<len(arr):
            if i!=j:
                if arr[i] >= arr[j]:
                    diffrence = arr[i] - arr[j]
                else:
                    diffrence = arr[j] - arr[i]
        
                if diffrence < minDiffrence:
                    minDiffrence = diffrence
                if diffrence > maxDiffrence:
                    maxDiffrence = diffrence
            j+=1
        i+=1
    print(minDiffrence, maxDiffrence)

   

 
