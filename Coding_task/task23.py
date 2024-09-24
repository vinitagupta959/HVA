# Write a program that takes a number n as input and prints the number of digits the number has.

num=int(input())
count=0
while num>0:
    num=num//10
    count+=1
print(count)
