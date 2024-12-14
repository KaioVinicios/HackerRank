# Merge the Tools!
# https://www.hackerrank.com/challenges/merge-the-tools/problem


def merge_the_tools(string, k):
    for i in range(0, len(string), k):
        substring = string[i:i+k]
        result = ''
        for letter in substring:
            if letter not in result:
                result += letter
        print(result)
                        
        
if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)