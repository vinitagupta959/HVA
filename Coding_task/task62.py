# You are given an array of integers. Print the frequency of each element in the array.


arr = list(map(int, input().split()))
arr1 = []   
i = 0
while i < len(arr):
    j = 0
    find=False
    while j < len(arr1):
        if arr[i] == arr1[j]: 
            find = True
            break
        j += 1  
    i += 1
    if not find:
        arr1+=[arr[i]]
        i+=1
k = 0
while k < len(arr1):
    count = 0
    l = 0
    while l < len(arr):
        if arr1[k] == arr[l]:   
            count += 1
        l += 1
    print(arr1[k], count)
    k += 1
