import re

# Read products.html to extract the filters and gallery-grid
with open('products.html', 'r', encoding='utf-8') as f:
    prod_html = f.read()

# Extract the filters and the gallery-grid
match = re.search(r'(<div class="filter-tabs".*?</div>)\s*(<div class="gallery-grid">.*?</div>\n    </div>)', prod_html, flags=re.DOTALL)
if match:
    products_content = match.group(1) + '\n\n    ' + match.group(2)
else:
    print("Could not find products content in products.html")
    exit(1)

# Read index.html
with open('index.html', 'r', encoding='utf-8') as f:
    idx_html = f.read()

# Replace the services-grid in index.html with the new products_content
# We'll replace everything from <div class="services-grid"> to the end of that grid.
# Actually, it's safer to use a regex to find the services-grid.
idx_html = re.sub(r'<div class="services-grid">.*?</div>\n\n            <div class="trust-badges">', 
                  products_content + '\n\n            <div class="trust-badges">', 
                  idx_html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(idx_html)

print("index.html products section updated successfully.")
