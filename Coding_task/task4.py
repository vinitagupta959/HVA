
# Write a program that suggests an activity based on the current temperature (in Celsius), following these guidelines:
# Above 30°C: "It's hot. Let's go swimming!"
# 20°C to 30°C: "Perfect for a picnic."
# 10°C to 19°C: "Maybe wear a jacket?"
# Below 10°C: "Too cold! Best to stay indoors."

temp=int(input("Enter temp"))
if temp>=30:
    print("It's hot. Let's go swimming!")
elif temp>=20:
    print("Perfect for a picnic.")
elif temp>=10:
    print("Maybe wear a jacket?")
else:
    print("Too cold! Best to stay indoors.")
