# You are given an integer n. Print first n terms of the series 2, 5, 8, 11, 14…

num=int(input())
sum=2
i=3
count=0
while count<num:
    print(sum,end=" ")
    sum+=i
    count+=1