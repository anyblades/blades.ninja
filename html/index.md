---
permalink: /html/
eleventyNavigation:
  key: Templates <mark>NEW</mark>
  order: 5
summary: Generic Nunjucks/Liquid templates for 11ty/Build Awesome, Jekyll, Shopify, etc.

bricks:
  - md: |-
      ---
      ## Templating engines
  - path: ./html/_njk.md
  - md: ---
  - path: ./html/_liquid.md
  - md: |-
      ---
      ## Templates

revised: 2026-04-15
---

## Install

###### <mark>Via npm</mark>

```sh
npm install @anyblades/blades
cd ./_includes # or where your includes dir is
ln -s ../node_modules/@anyblades/blades/_includes/blades
```

That's it! Now you can use HTML blades in your templates like this:

```jinja2 {data-caption=Nunjucks}
{% extends 'blades/*.njk' %}
{% include 'blades/*.njk' %}
```

```liquid {data-caption=Liquid}
{% include blades/*.liquid %}
{% render blades/* %}
```

###### <mark>Preconfigured</mark>

- 11ty: https://github.com/anyblades/build-awesome-starter
- Jekyll: https://github.com/anyblades/bladeswitch
