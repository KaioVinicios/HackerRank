# Company Logo
# https://www.hackerrank.com/challenges/most-commons/problem


if __name__ == '__main__':
  s = input()
  letters = {}

  for letter in s:
    letters[letter] = letters.get(letter, 0) + 1

  sorted_letters = sorted(letters.items(), key=lambda item: (-item[1], item[0]))

  for k, v in sorted_letters[:3]:
    print(f'{k} {v}')
