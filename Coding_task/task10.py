# You are given an integer n. Print all the even numbers less than equal to n.
n=int(input("enter"))
i=1
while i<=n:
    if i%2==0:
        print(i)
    i+=1