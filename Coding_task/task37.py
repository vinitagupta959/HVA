# Print the following pattern based on the given input.
# Sample Input: 
# 5
# Sample Output: 
#     *
#    ***
#   *****
#  *******
# *********

num=5 
i=num
k=1
while i>0:
    j=0
    while j<i-1:
        print(" ",end="")
        j+=1 
    j=0
    while j<k:
        print("*",end="")
        j+=1 
    print()
    i-=1
    k+=2
   