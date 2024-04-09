a = int(input())
b = int(input())
c = int(input())

if a > b and a > c:
    d = a
elif b > a and b > c:
    d = b
else: 
    d = c

print(d)
