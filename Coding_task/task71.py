# You are given a String. Count the number of vowels and consonants the string has. Print the number of vowels followed by the number of consonants.
# Note: The string may contain other character like space and full stop.
# Vowels are alphabets belonging to the following group - {a, e, i, o u}. Consonants are rest of the alphabets that do not belong to the group - {a, e, i, o u}.
# Sample Input: 
# Hello World
# Sample Output: 
# 3 7
# Explanation: The string has 3 vowels and 7 consonants.
sem=input()
vowels=["a","i","o","u","e","A","E","U","I","O"]
constant=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z","B","C","D","E","F","G","H","J","K","L","M","N","P","Q",'R',"S","T","V","W","X","Y","Z"]
i=0
vowelCount=0
constantCount=0
while i<len(sem):
    vowelFound="False"
    j=sem[i]
    k=0
    while k<len(vowels):
        if j==vowels[k]:
            vowelFound="True"
            break

        k+=1
    if vowelFound=="True":
        vowelCount+=1 
    else:
        k=0
        while k<len(constant):
            if j==constant[k]:
                constantCount+=1
                break
            k+=1
    i+=1
print(vowelCount,constantCount)


