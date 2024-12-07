# You are given an array of integers. Check if the given array is a Palindrome. If it is a Palindrome array, print yes, else print no.
# Note: A Palindrome Array is when the reverse of the array is the same as the original array.

arr = [11, 22, 22, 11] 
palindrome = True

for i in range(len(arr) // 2):
    if arr[i] != arr[len(arr) - 1 - i]:
      palindrome = False   
      break   
 
if palindrome:
    print("Yes")  # If is_palindrome is True, print "Yes"
else:
    print("No")  # If is_palindrome is False, print "No"




