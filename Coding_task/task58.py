# You are given an array of integers. Check if the given array is a Palindrome. If it is a Palindrome array, print yes, else print no.
# Note: A Palindrome Array is when the reverse of the array is the same as the original array.


arr=list(map(int,input().split()))
b=[0]*len(arr)
i=len(arr)-1
j=0
while i>=0:
    b[j]+=arr[i]
    j+=1
    i-=1
i=0
while len(arr)<=len(b):
    res="YES"
    if arr[i]==b[i]:
        i+=1
    else:
        res="No"
print(res)




