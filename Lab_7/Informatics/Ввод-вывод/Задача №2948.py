a = int(input())

h = a // 3600
m = (a % 3600) // 60
s = a % 60

print(f"{h:02}:{m:02}:{s:02}")