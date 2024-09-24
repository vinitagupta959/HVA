
# Write a program that takes three numbers as input and prints the largest number.
A, B, C=map(int,input().split())
if A>B:
    M=A
else:
    M=B
if M>C:
    print(M)
else:
    print(C)
