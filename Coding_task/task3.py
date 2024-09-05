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