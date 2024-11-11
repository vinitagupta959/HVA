arr=list(map(int,input().split()))
b=[0]*len(arr)
i=len(arr)-1
j=1
while i>0:
    b[j]+=arr[i]
    j+=1
    i-=1
print(b)