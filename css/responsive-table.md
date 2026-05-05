---
eleventyNavigation:
  parent: Content
  key: Responsive table <mark>NEW</mark>
  order: 6
title: <em>Re</em>sponsive table <sub>without wrapping container</sub>
# eleventyComputed:
#   summary: |-
#     {{ 'https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/responsive-table.css'
#      | if: site.prod | default: '../../blades/src/responsive-table.css' | fetch | section: 'summary' | markdownify }}

bricks:
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/responsive-table.css
    sections: [docs, code]
  - md: |-
      ---
      ## Standalone CDN version
      ```html
      <link rel="stylesheet" href="
        https://cdn.jsdelivr.net/npm/@anyblades/blades@0/assets/responsive-table.min.css
      ">
      ```

revised: 2026-05-03
---
