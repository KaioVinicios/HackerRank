# ginortS
# https://www.hackerrank.com/challenges/ginorts/problem

if __name__ == '__main__':
    S = input()
    lowers_letters, upper_letters, odd_numbers, pair_numbers = [], [], [], []
    
    for letter in S:
        if letter.islower():
            lowers_letters.append(letter)
        elif letter.isupper():
            upper_letters.append(letter)
        elif letter.isnumeric():
            if int(letter) % 2 == 0:
                pair_numbers.append(letter)
            else:
                odd_numbers.append(letter)
    
    lowers_letters.sort()
    upper_letters.sort()
    odd_numbers.sort()
    pair_numbers.sort()

    result = ''.join(lowers_letters + upper_letters + odd_numbers + pair_numbers)
    print(result)
