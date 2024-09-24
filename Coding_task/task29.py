# Write a program that takes a Binary Number B as input and prints the Decimal equivalent of the given input.
num=int(input())
i=0
rem=0
sum=0
while num>0:
    rem=num%10
    num=num//10
    while i>0:
        sum=rem*(2*i)
        i-=1
    i+=1
print(sum)
