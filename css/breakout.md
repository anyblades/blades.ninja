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
  - text: |-
      ---
      ## Install <!-- same as https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/README.md -->

      ###### <mark>Via CDN</mark>

      <!--prettier-ignore-->
      ```html
      <link rel="stylesheet" href="
        https://cdn.jsdelivr.net/npm/@anyblades/blades@0/assets/breakout.min.css
      ">
      ```
  - text: "###### <mark>Included with</mark>"
  - teaser: /css/
    no_toc: true
  - text: "###### <mark>Included with</mark>"
  - teaser: /css/pico/
    no_toc: true

revised: 2026-04-14
---
