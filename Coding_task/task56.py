# You are given an integer array. Print the length of the longest subarray with increasing numbers.
# A subarray is defined as a contiguous portion of an array.
# Try not to use nested loop.
# Sample Input: 
# 5 4 4 7 6 3 2 4 6 8 6 3 6 8 5
# Sample Output: 
# 4

arr=list(map(int,input().split()))
max=1
current=1
i=1
while i<len(arr):
    # yaha pr hum i=1 kiye or jab hum i-1 karenge to vo just i ki rwscet ki value ke just ek km valur  dekhega kyuki sub array ek continues form hota hai 
    if arr[i]>arr[i-1]:
        current+=1
    else:
        max=current
        current=1
    i+=1
if current>max:
    max=current
print(max)