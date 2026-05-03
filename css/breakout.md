---
eleventyNavigation:
  parent: Layout
  key: Breakout <mark>NEW</mark>
  order: 5
title: <em>Br</em>eakout layout
# eleventyComputed:
#   summary: |-
#     {{ 'https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/breakout.css'
#      | if: site.prod | default: '../../blades/src/breakout.css' | fetch | section: 'summary' | markdownify }}

includes:
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/breakout.css
    sections: [docs, code]
  - md: |-
      ---
      ## Standalone CDN version

      <!--prettier-ignore-->
      ```html
      <link rel="stylesheet" href="
        https://cdn.jsdelivr.net/npm/@anyblades/blades@0/assets/breakout.min.css
      ">
      ```

revised: 2026-05-03
---
