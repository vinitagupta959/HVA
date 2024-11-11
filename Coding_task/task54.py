# You are given an array of integers. Print the first element of the array that is a perfect square. If there are no perfect squares, print No.
# Sample Input 1:
# 3 6 7 4 6 9 1 23
# Sample Output 1:
# 4

arr=list(map(int,input().split()))
i=0
result="no"
while i<len(arr):
    multi=0
    j=1
    while multi<arr[i]:
        multi=j*j
        if multi==arr[i]:
            result=arr[i]
        j+=1
    i+=1
print(result)
            

