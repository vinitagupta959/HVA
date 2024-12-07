# # You are given an array of integers. Check if the array has any negative numbers. If the array has any negative number, print yes. Else, print no.
# Sample Input 1:
# 11 1 13 21 3 7
# Sample Output 1:
# No
# Explanation 1: The given array has no negative number. 

arr = list(map(int, input("Enter space-separated numbers: ").split()))
i=0
result = "No"
while i<len(arr):
    if arr[i]<0:
        result="Yes"
        break
    i+=1
print(result)