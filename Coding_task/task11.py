# You are given an integer n. Print the first n even numbers.

num=int(input())
i=1
multi=0
while multi<=num:
    multi=i*i
    print(multi,end=" ")
    i+=1