n = int(input())
a = [int(input()) for i  in range(n)]
print(sum(1 for i in range(1, n - 1) if a[i] >= a[i - 1] and a[i] >= a[i + 1]))