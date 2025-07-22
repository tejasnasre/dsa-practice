# by loop

def sum_of_arr(arr):
    total = 0

    for num in arr:
        total += sum

    return total


def sum_of_arr_recursive(arr):
    if not arr:
        return 0
    
    return arr[0] + sum_of_arr_recursive(arr[1:])