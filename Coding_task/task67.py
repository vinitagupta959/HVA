# You are given two arrays. Check if the second array is a subarray of the first array. Print yes if it is, else print no.
# A subarray is defined as a contiguous portion of an array.
# Sample Input 1: 
# 3 6 2 1 7 6 4 9 7
# 7 6 4 9 7
# Sample Output 1: 
# Yes
# Sample Input 2: 
# 3 6 2 1 7 6 4 9 7
# 7 6 4 9 6
# Sample Output 2: 
# No



arr = list(map(int, input().split()))
target = list(map(int, input().split()))
i = 0
find="No"
while i<len(arr):
    j=i
    k=0
    while j<len(arr):
        if arr[j]==target[k]:
            if k==len(target)-1:
              find="Yes"
              break
            k+=1
            j+=1
        else:
            break
    i+=1
print(find)
