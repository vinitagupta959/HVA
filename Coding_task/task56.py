# You are given an integer array. Print the length of the longest subarray with increasing numbers.
# A subarray is defined as a contiguous portion of an array.
# Try not to use nested loop.
# Sample Input: 
# 5 4 4 7 6 3 2 4 6 8 6 3 6 8 5
# Sample Output: 
# 4
a = list(map(int, input().split()))
max = 1
current= 1
i = 1

while i < len(a):
    if a[i] > a[i - 1]:
        current += 1
    else:
        if current > max_length:
            max_length = current 
        current = 1
    i += 1

if current > max:
    max = current 

print(max)