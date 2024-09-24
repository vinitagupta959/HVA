num=int(input())
i=1
sum=0
while i<num:
    if (num%i==0):
        sum+=i
    i+=1
if (num==sum):
    print("Yes")
else:
    print("No")
