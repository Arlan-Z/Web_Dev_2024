n = int(input())
a = [int(input()) for i  in range(n)]
print('Yes' if sum(1 for i in range(1, n) if a[i] * a[i - 1] > 0) else 'No')