# You are given an integer n. Print the first n even numbers

num=int(input("Enter num"))
i=2
count=0
while count<num:
    print(i,end=" ")
    count+=1
    i+=2