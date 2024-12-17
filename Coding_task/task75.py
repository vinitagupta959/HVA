# You are given a String and and an index. Capitalize the character at the nth position in the given String.
# Note: You can consider the index to start from 0.
# Sample Input: 
# programming
# 6
# Sample Output: 
# prograMming

string=list(input())
target=int(input())
capital=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
small=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
i=0
while i<len(small):
    if string[target]==small[i]:
        string[target]=capital[i]
        break
    i+=1
j=0
while j<len(string):
    print(string[j],end="")
    j+=1
