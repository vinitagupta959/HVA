# You are given an integer array and a target sum. Find all pairs of elements in the array that add up to the given sum.
# Sample Input: 
# 4 6 7 2 8 9 3 10
# 10
# Sample Output: 
# 4 6
# 7 3
# 2 8
# Explanation: The target sum here is 10. 10=4+6. 10=7+3. 10=2+8. Also, if you have printed the pair 4,6 once, you do not need to print it again as 6,4.



arr = list(map(int, input().split()))
target = int(input())
i = 0
while i<len(arr)-1:
    j=i+1
    while j<len(arr):
        if arr[i]+arr[j]==target:
            print(arr[i], arr[j])
        j+=1
    i+=1
