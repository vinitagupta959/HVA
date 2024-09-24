# You are given an integer n. Print first n terms of the series 3, 5, 7, 9, 11…
num=int(input())
sum=3
count=0
while count<num:
    print(sum,end=" ")
    sum+=2
    count+=1
   