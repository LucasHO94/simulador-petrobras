import re
from collections import Counter

file_path = 'src/questions.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to find discipline names
disciplines = re.findall(r'discipline:\s*"(.*?)"', content)
counts = Counter(disciplines)

print("--- RELATÓRIO DE QUESTÕES ---")
total = 0
for disc, count in counts.items():
    print(f"{disc}: {count}")
    total += count
print(f"TOTAL GERAL: {total}")
