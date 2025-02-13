# Write a program that takes a string S as input and checks if the string S satisfies all the following conditions to be a strong password:
# Contains at least 8 characters.
# Contains at least one lowercase character.
# Contains at least one uppercase character.
# Contains at least one number.
# Contains at least one special character.
# If the string S satisfies all conditions, print yes, else print no.
# Sample Input 1: 
# Abcd@123
# Sample Output 1: 
# Yes



password=input()
lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
uppercase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
specialChar=["!","@","#","$","&"]
number=["0","1","2","3","4","5","6","7","8","9"]
findLow=False
findUpp=False
findSpe=False 
findNum=False 
if len(password)>=8:
  i=0
  while i<len(password):
    if password[i] in lowerCase:
      findLow=True 
    if password[i] in uppercase:
      findUpp=True 
    if password[i] in specialChar:
      findSpe=True
    if password[i] in number:
      findNum=True
    i+=1 
if findNum==True and findUpp==True and findSpe==True and findLow==True:
  print("Yes")
else:
  print("No")
  