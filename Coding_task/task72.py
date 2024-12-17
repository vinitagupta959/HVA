# You are given a String and a Character. Count how many times the Character is present in the given String. If the Character is not present in the String, print "No".
# Sample Input 1: 
# Hello World
# l
# Sample Output 1: 
# 3
# Explanation 1: The Character l is present 3 times in the String "Hello World".

sen=input().lower()
target=input().lower()
i=0
count=0
find=False
while i<len(sen):
    if sen[i]==target:
        find=True
        count+=1
    i+=1
if find:
    print(count)
else:
    print("No")