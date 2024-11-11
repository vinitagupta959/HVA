# You are given two positive integers a and b. Print the LCM of these two numbers.
# Sample Input: 
# 20 16
# Sample Output: 
# 80
num=int(input())
num1=int(input())
a=num
b=num1
i=1
high=0
hcf=0
rem=0
lcm=0
while num1>0:
  rem=num%num1
  num=num1
  num1=rem
lcm=a*b//num
print(lcm)