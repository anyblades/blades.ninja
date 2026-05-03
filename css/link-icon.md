---
eleventyNavigation:
  parent: Content
  key: Link icon <mark>NEW</mark>
  order: 2
title: '<em>L</em>ink <code style="padding: 0">i</code>con'
# eleventyComputed:
#   summary: |-
#     {{ 'https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/link-icon.css'
#      | if: site.prod | default: '../../blades/src/link-icon.css' | fetch | section: 'summary' | markdownify }}

includes:
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/link-icon.css
    sections: [docs, code]
  - md: |-
      ---
      ## Standalone CDN version

      <!--prettier-ignore-->
      ```html
      <link rel="stylesheet" href="
        https://cdn.jsdelivr.net/npm/@anyblades/blades@0/assets/link-icon.min.css
      ">
      ```

revised: 2026-05-03
---
