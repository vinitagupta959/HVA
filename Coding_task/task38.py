# You are given an integer n. Print the first n prime numbers.
# Sample Input: 
# 7
# Sample Output: 
# 2 3 5 7 11 13 17


num=7 
i=2 
x=2
count=0
while count<num:
    i=2
    divisor=True
    while i*i<=x:
        if x%i==0:
            divisor=False
            break
        i+=1
    if divisor:
        print(x,end=" ")
        count+=1
    x+=1
   
   

