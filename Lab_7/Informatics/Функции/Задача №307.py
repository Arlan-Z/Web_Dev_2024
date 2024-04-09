def power(a, b):
    result = a
    for i in range(1, b):
        result *= a
    
    return result

print(power(2, 3))