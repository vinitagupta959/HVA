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
num = int(input())
i = 1
while i <= num:
    spaces = num - i
    stars = i
    j = 0
    while j < spaces:
        print(" ", end="")
        j += 1
    k = 0
    while k < stars:
        print("*", end="")
        k += 1
    print()
    i += 1

