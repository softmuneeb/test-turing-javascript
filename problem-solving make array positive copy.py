def getMinOperations(arr):
    # 100 000 * 100 000 = 10 B
    # 100 000 * 16 = 1.6 M

    count = 0

    for i in range(len(arr) - 1):
        if arr[i] + arr[i + 1] < 0:
            arr[i + 1] = 10
            count = count + 1

    for i in range(len(arr) - 2):
        if arr[i] + arr[i + 1] + arr[i + 2] < 0:
            arr[i + 2] = 10
            count = count + 1

    for i in range(len(arr) - 3):
        if arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] < 0:
            arr[i + 3] = 10 ** 18
            count = count + 1

    # for i in range(len(arr) - 4):
    #     if arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] + arr[i + 4] < 0:
    #         arr[i + 4] = 10 ** 18
    #         count = count + 1

    # for i in range(len(arr) - 5):
    #     if arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] + arr[i + 4] + arr[i + 5] < 0:
    #         arr[i + 5] = 10 ** 18
    #         count = count + 1

    # print(arr)
    return count


# print(getMinOperations([-1, -1, -1, -1, -1]))
print(getMinOperations([-10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10]))


# [-1, -1, -1, -1, -1]
# [-10, -10, -10, -10, -10]
# [-10, 10, -10, 10, -10]
# [-10, 10, 10, 10, -10]

# [-1, 10, -1, 10, -1]
# [-10, 10, 10, 10, -10]

# [-10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10]

# [-10, 10, 10, 10, -10, 10, 10, 10, -10, 10, -10, 10, -10, 10, -10]
