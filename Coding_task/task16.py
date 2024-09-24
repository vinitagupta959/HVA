
# Write a program that takes a number n as input and prints all the factors of the number.

num=int(input())
i=1
while i<=num:
    if num%i==0:
        print(i,end=" ")
    i+=1