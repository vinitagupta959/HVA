#  You are given an integer n. Print yes, if it is an Armstrong Number. Print no, if it is not an Armstrong Number.
# An Armstrong Number is a positive number that equals the sum of its digits, each raised to the power of the number of digits.
# Sample Input 1: 
# 1634
# Sample Output 1: 
# Yes


num=int(input())
num1=num
num2=num1
rem=0
count=0
sum=0
while num>0:
    num=num//10
    count+=1
while num1>0:
    rem=num1%10
    sum+=rem**count
    num1=num1//10
print(sum)
if sum==num2:
    print("Yes")
else:
    print("NO")
  
