# You are given an integer array. Print the first number that repeats itself. If no number repeats in the array, print No. 
# Sample Input 1:
# 5 11 4 7 8 4 6 11 7
# Sample Output 1:
# 11
# Explanation 1: In the given array, 11 is the first number that repeats itself.
# Sample Input 2:
# 11 1 13 21 3 7
# Sample Output 2:
# No
# Explanation 2: The given array doesn't contain any duplicate element, hence we print No.


arr = list(map(int, input().split()))
i = 0
find=False
while i<len(arr)-1:
    j=i+1
    while j<len(arr):
        if arr[i]==arr[j]:
            find=True
            break
        j+=1
    if find:
        print(arr[i])
        break
    i+=1
if not find:
    print("No")

                