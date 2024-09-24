# You are given an integer n. Print the sum of the first n Natural Numbers.

num=int(input())
i=1
sum=0
while i<=num:
    sum+=i
    i+=1
print(sum)