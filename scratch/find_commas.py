import re

with open('src/questions.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(len(lines) - 1):
    curr = lines[i].strip()
    nxt = lines[i+1].strip()
    if curr == '}' and nxt == '{':
        print(f"Missing comma at line {i+1}")
