# You are given an array of integers. Check if the array is in Ascending Order. If yes, print "Yes", else print "No.
# Sample Input 1:
# 3 5 10 13 16 12 14
# Sample Output 1:
# No

arr=list(map(int,input().split()))
i=1
result="Yes"
while i<len(arr):
    if arr[i]<arr[i-1]:
        result="No"
        break
    i+=1
print(result)

        
        

    


