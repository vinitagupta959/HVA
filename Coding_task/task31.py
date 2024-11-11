# You are given an integer n. Print yes, if it is a prime number. Print no, if it is not a prime number
x=int(input())
i=1
count=0
while i<=x:
    if x%i==0:
        count+=1
    i+=1
if count<=2:
    print("YES")
else:
    print("No")