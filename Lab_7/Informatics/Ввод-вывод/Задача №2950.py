a = int(input())

h = 9
m = 0
a -= 1

sum = 45 * (a + 1)  + 15 * (a // 2) + 5 * (a - a // 2)

m += (sum % 60)
h += sum // 60

print(h, m)