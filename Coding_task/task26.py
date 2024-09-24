# Write a program that takes a number n as input and prints the reverse of the given number.
num=int(input())
rem=0
sum=0
while num>0 :
    rem=num%10
    num=num//10
    sum=rem+(sum*10)
print(sum)