# Write a program that categorizes a person's age into different life stages based on the following conditions:
# 0-2 years: Infant
# 3-12 years: Child
# 13-19 years: Teenager
# 20-65 years: Adult
# Above 65 years: Senior


year=int(input("Enter year"))
if year<=2:
    print("Infant")
elif year<=12:
    print("Child")
elif year<=19:
    print("Teenager")
elif year<=65:
    print("Adult")
else:
    print("Senior")