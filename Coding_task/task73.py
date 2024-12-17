# You are given two String S1 and S2. Determine if the two strings are anagrams of each other.
# Anagrams are words or phrases formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word "listen" is an anagram of "silent".
# Note: You will have to ignore case and white spaces.
# Sample Input 1: 
# Silent
# Listen
# Sample Output 1: 
# Yes
# Explanation 1: Silent and Listen has the same letters. If we ignore case, they are anagrams.

string1=input()
string2=input()
i=0
count=0
while i<len(string1):
    j=0
    while j<len(string2):
        if string1[i]==string2[j]:
            count+=1
            break
        j+=1
    i+=1
if len(string2)==len(string1):
    if count==len(string1):
        print("Yes")
else:
    print("No")