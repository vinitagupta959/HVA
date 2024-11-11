# You are given an integer n. Print yes, if it is a Perfect Number. Print no, if it is not a Perfect Number.
# A Perfect Number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
# Sample Input 1: 
# 28
# Sample Output 1: 
# Yes
num=int(input())
i=1
sum=0
while i<num:
    if (num%i==0):
        sum+=i
    i+=1
if (num==sum):
    print("yes")
else:
    print("no")