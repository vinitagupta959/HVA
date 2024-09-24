#  You are given an integer n. Print yes, if it is an Armstrong Number. Print no, if it is not an Armstrong Number.

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
  
