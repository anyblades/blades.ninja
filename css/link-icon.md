---
eleventyNavigation:
  parent: Content
  key: Link icon <mark>NEW</mark>
  order: 2
title: 'Link <code style="padding: 0">i</code>con'
# eleventyComputed:
#   summary: |-
#     {{ 'https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/link-icon.css'
#      | if: site.prod | default: '../../blades/src/link-icon.css' | fetch | section: 'summary' | markdownify }}
revised: 2026-05-03

bricks:
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/link-icon.css
    sections: [docs, code]
---

## Standalone CDN version

<!--prettier-ignore-->
```html
<link rel="stylesheet" href="
  https://cdn.jsdelivr.net/npm/@anyblades/blades@2/assets/link-icon.min.css
">
```
