# You are given two positive integers a and b. Print the GCD or HCF of these two numbers.
# Sample Input: 
# 20 16
# Sample Output: 
# 4

num=int(input())
num1=int(input())
i=1
high=0
small=0
hcf=0
if num>num1:
    high=num
    small=num1
else:
    high=num1
    small=num
while i<=small:
    if num%i==0:
        if num1%i==0:
            hcf=i
    i+=1
print(hcf)