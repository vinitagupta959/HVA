# You are given an integer array. Traverse through the array and for each element, if the element is odd print "Odd", else print "Even".
arr=list(map(int,input().split()))
i=0
while i<len(arr):
    if arr[i]%2==0:
        print("Even")
    else:
        print("Odd")
    i+=1