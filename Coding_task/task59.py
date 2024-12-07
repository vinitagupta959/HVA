# You are given an array of integers. Find the element that appears the maximum number of times in an array. If multiple elements appear maximum number of times, you can print any.
# Sample Input:
# 5 4 7 11 8 4 6 11 9
# Sample Output:
# 4
# Explanation: Both 4 and 11 appear 2 times. We can print any of 4 and 11, so we print 4.

arr=list(map(int,input().split()))
i = 0
maxcount = 0
maxelement = arr[0]

while i < len(arr):
    count = 0
    j = 0
    while j < len(arr):
        if arr[i] == arr[j]:
            count += 1
        j += 1
    if count > maxcount:
        maxcount = count
        maxelement = arr[i]
    i += 1

print(maxelement)
