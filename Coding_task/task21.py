# You are given an integer n. Print the sum of the first n terms of the series 3, 5, 7, 9, 11….

num=int(input())
i=3
sum=0
count=0
while count<num:
    sum+=i
    i+=2
    count+=1
print(sum)