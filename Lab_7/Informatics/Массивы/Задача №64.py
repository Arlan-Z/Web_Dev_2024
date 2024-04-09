n = int(input())
a = [int(input()) for i  in range(n)]
print(*(i for i in a if i % 2 == 0))