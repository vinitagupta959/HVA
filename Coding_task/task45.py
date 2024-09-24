# You are given an integer array. Multiply all the numbers present in the array and print the final product.
arr=list(map(int, input().split()))
i=0
sum=1
while i<len(arr):
    sum=sum*arr[i]
    i+=1
print(sum)
