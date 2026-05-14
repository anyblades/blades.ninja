---
eleventyNavigation:
  parent: Layout
  key: <em>Br</em>eakout container <mark>NEW</mark>
  order: 1
# eleventyComputed:
#   summary: |-
#     {{ 'https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/breakout.css'
#      | if: site.prod | default: '../../blades/src/breakout.css' | fetch | section: 'summary' | markdownify }}
revised: 2026-05-03

bricks:
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/breakout.css
    sections: [docs, code]
---

## Standalone CDN version

<!--prettier-ignore-->
```html
<link rel="stylesheet" href="
  https://cdn.jsdelivr.net/npm/@anyblades/blades@2/assets/breakout.min.css
">
```
