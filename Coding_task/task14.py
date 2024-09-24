# You are given an integer n. Print the first n square numbers.

num=int(input())
i=1
count=0
while count<num:
    print(i*i,end=" ")
    i+=1
    count+=1