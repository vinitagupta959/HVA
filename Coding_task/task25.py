# Write a program that takes a number n as input and prints the reverse of the given number.
num=int(input())
a=0
b=1
c=0
i=0
while i<num:
    print(a,end=" ")
    c=a+b
    a=b
    b=c
    i+=1
