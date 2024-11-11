# You are given an integer n. Print the first n odd numbers.

num=int(input("Enter num"))
i=1
count=0
while count<num:
    print(i,end=" ")
    count+=1
    i+=2