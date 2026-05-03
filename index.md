---
permalink: /
eleventyNavigation:
  key: Get started
  order: 0
site:
  inline_styles:
    - |-
      h1 mark {
        background: linear-gradient(to right, rgb(215.4, 140.8, 210.2), rgb(184.5, 153, 237.75), rgb(156.6, 165.3, 232.6), rgb(142.75, 168.95, 240.05));
        background-clip: text;
        color: transparent;
      }
      .fa-tailwind-css  { color: deepskyblue }
      .fa-bootstrap     { color: blueviolet }
# eleventyComputed:
#   #TODO: add to tricks
#   summary: |-
#     {{ 'https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/README.md'
#      | if: site.prod | default: '../../blades/README.md' | fetch | section: 'summary' | markdownify }}
#   site.title: "{{ site.title }} | {{ summary | split: '</hgroup>' | first | strip_html }}"
#   hero: "<br>{{ summary | replace: 'hgroup>', 'h1>' | replace: '<wbr>', '<br>' }}<br>"

includes:
  - tpl: |-
      <h2><sup>Documentation</sup></h2>
      <ul class="columns">
        {% for page in collections.all | eleventyNavigation %}
        <li>
          <strong><a href="{{ page.url }}">{{ page.key }}</a></strong>
          {{ collections.all | eleventyNavigation(page.key) | eleventyNavigationToHtml | safe }}
        </li>
        {% endfor %}
      </ul>
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/README.md
    section: info
---

<section style="display: grid; place-items: center; min-height: calc(100dvh - 100px)">
  <div style="text-align: center; text-wrap: balance">

# <mark>Minimal CSS&nbsp;Framework</mark> <br> for Semantic&nbsp;HTML

Fully compatible and actively maintained successor to Pico CSS.

Includes [Float labels](/docs/float-label/), [Breakout layout](/docs/breakout/) and other modern helpers. Simply switch `pico.css` to `blades.css`, or add `blades.standalone.css` to other frameworks.

<br>

[Get Started &nbsp;›](/docs/){role=button} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[Examples &nbsp;›](/examples/){role=button .contrast}

  </div>
</section>
