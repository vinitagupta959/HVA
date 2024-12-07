# You are given an array of integers. Print an array where each index has the sum of all numbers in the original array except the number at that index. 
# Avoid using subtraction, and handle this with nested loops.
# Sample Input:
# 7 3 6 7 5
# Sample Output:
# 21 25 22 21 23
# Explanation: The first element of the array is 7, so we print sum of all the elements except the number itself. 21 = 3 + 6 + 7 + 5.
# The second element of the array is 3. 25 = 7 + 6 + 7 + 5.
# The third element of the array is 6. 22 = 7 + 3 + 7 + 5.
# The fourth element of the array is 7. 21 = 7 + 3 + 6 + 5.
# The fifth element of the array is 5. 23 = 7 + 3 + 6 + 7.

b = list(map(int, input().split()))  # Input list
i = 0
c = [0] *len(b) 

while i < len(b):
    sum = 0
    j = 0
    while j < len(b):
        if j != i:
            sum = sum + b[j]
        j += 1
    c[i] += sum   
    i += 1
k = 0
while k < len(c):
    print(c[k], end=" ")  
    k += 1
