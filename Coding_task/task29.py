# Write a program that takes a Binary Number B as input and prints the Decimal equivalent of the given input.
num=int(input())
dec=0
i=0
while num>0:
    dec+=num%10*(2**i)
    num=num//10
    i+=1
print(dec)

