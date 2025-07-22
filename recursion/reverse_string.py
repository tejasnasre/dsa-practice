# reverse string 

def reverse_string(s):
    rev_string = ""

    for str in s:
        rev_string = str + rev_string
    
    return rev_string


# print(reverse_string("hello"))

def reverse_string_recursive(s):
    if len(s) <= 1:
        return s
    
    return reverse_string_recursive(s[1:]) + s[0]


print(reverse_string_recursive("tiger"))