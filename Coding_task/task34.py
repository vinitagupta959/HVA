# Print the following pattern based on the given input.
num=int(input())
i=0
while i<num:
    j=0
    while j<=i:
        print("*",end="")
        j+=1
    print()
    i+=1
    