# String Validators
# https://www.hackerrank.com/challenges/string-validators/problem


if __name__ == '__main__':
    s = input()

    has_alnum = has_alpha = has_digit = has_lower = has_upper = False

    for char in s:
        if not has_alnum and char.isalnum():
            has_alnum = True
        if not has_alpha and char.isalpha():
            has_alpha = True
        if not has_digit and char.isdigit():
            has_digit = True
        if not has_lower and char.islower():
            has_lower = True
        if not has_upper and char.isupper():
            has_upper = True
        
        if all([has_alnum, has_alpha, has_digit, has_lower, has_upper]):
            break

    print(has_alnum)
    print(has_alpha)
    print(has_digit)
    print(has_lower)
    print(has_upper)
