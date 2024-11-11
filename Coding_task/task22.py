# Write a program to calculate the factorial of a given number n. 
# The factorial of a number n is the product of all positive integers less than or equal to n.
num=int(input())
i=1
factorial=1
while i<=num:
    factorial*=i
    i+=1
print(factorial)
