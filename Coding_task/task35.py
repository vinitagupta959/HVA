# Print the following pattern based on the given input.
# Sample Input: 
# 6
# Sample Output: 
#      *
#     **
#    ***
#   ****
#  *****
# ******
num=int(input())
i=0
while i<num:
    i=num
    j=0
    while j<i:
        print(" ",end="")
        j+=1

