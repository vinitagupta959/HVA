# You are given an integer n. Print the first n even numbers.

num=int(input())
i=0
multi=0
while i<num:
    multi=i*i
    print(multi,end=" ")
    i+=1