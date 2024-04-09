n = int(input())
a = [int(input()) for i  in range(n)]
b = []
for i in a[::-1]: b.append(i)
print(b)