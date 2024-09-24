# You are given two positive integers a and b. Print the GCD or HCF of these two numbers.
num,num1=map(int,input().split())
i=1
high=0
hcf=0
if num<num1:
    high=num
else:
    high=num1
while i<high:
    if num%i==0:
        if num1%i==0:
            hcf=i
    i+=1
print(hcf)