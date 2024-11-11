# Write a program that calculates the sum of all the digits in a given number n.
# Sample Input: 
# 1132
# Sample Output: 
# 7

num=int(input())
sum=0
while num>0:
    sum+=num%10
    num=num//10
print(sum)