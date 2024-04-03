a = input()
for i in range(len(a), 4):
    a = '0' + a
print(a[0] == a[3] and a[1] == a[2])