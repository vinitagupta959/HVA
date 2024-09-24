# Write a program to calculate the factorial of a given number n. 
# The factorial of a number n is the product of all positive integers less than or equal to n.

num=int(input())
i=1
sum=1
while i<=num:
    sum*=i
    i+=1
print(sum)
