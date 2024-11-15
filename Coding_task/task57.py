# You are given an array of integers. Create a new array with elements in reverse order. Print the new array.
arr=list(map(int,input().split()))
b=[0]*len(arr)
i=len(arr)-1
j=0
while i>=0:
    b[j]+=arr[i]
    j+=1
    i-=1
print(b)