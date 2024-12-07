# Write a program that takes a Decimal Number D as input and prints the Binary equivalent of the given input.
 



decimal =8
if decimal == 0:
    print(0)
else:
    binary = 0
    place = 1
while decimal > 0:
    binary = binary + (decimal % 2) * place
    place *= 10 
    decimal = decimal // 2
print(binary)