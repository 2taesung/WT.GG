import re

a = 'abcd'

print(re.search('a(.+?)cd', a).group(1))