#  Write a program that takes a student's score (out of 100) and outputs their grade based on the following conditions:
# 90-100: Grade A
# 80-89: Grade B
# 70-79: Grade C
# 60-69: Grade D
# Below 60: Grade F



score=int(input("Enter score"))
if score>=90:
    print("A")
elif score>=80:
    print("B")
elif score>=70:
    print("C")
elif score>=60:
    print("D")
else:
    print("F")