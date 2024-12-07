# You are given an integer array. Print the maximum sum of two consecutive integers in the given array.
arr=list(map(int,input().split()))
i=0 
j=1
maxsum=arr[i]+arr[j]
if len(arr)<2:
    print("give more numbers becouse it not enough")
else:
    while i<len(arr)-1:
        new=arr[i]+arr[j]
        if maxsum<new:
            maxsum=new 
        i+=1
        j+=1
    print(maxsum)


