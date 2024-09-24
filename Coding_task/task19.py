# You are given an integer n. Print first n terms of the series 3, 6, 12, 24, 48…

num=int(input())
sum=3
count=0
while count<num:
    print(sum,end=" ")
    sum*=2
    count+=1