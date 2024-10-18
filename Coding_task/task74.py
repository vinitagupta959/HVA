name=input()
name=list(name)
i=0
name1=0
while i<len(name):
    j=i+1
    while j<len(name):
        name1=name[i]
        if name[i]==name[j]:
            break
        name[i]=name[j+1]
        j+=1
    i+=1
print(name)
    
        