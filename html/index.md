---
permalink: /html/
eleventyNavigation:
  key: Templates <mark>NEW</mark>
  order: 5
description: Generic Nunjucks, Twig and Liquid templates for 11ty/Build Awesome, Grav, Drupal, Jekyll, Shopify, etc.
revised: 2026-04-15
---

<big>There are 2 ways to get started:</big>

### <mark>A.</mark> Install with NPM

```sh
npm install @anyblades/blades
cd _includes # or where your includes dir is
ln -s ../node_modules/@anyblades/blades/_includes/blades
```

That's it! Now you can reuse templates from Blades like this:

<div class="grid breakout-item-max">

```jinja2 {data-caption=Nunjucks}
{% extends 'blades/NAME.njk' %}
{% include 'blades/NAME.njk' %}
```

```liquid {data-caption=Liquid}
{% include blades/NAME.liquid %}
{% render blades/NAME %}
```

</div>

### <mark>B.</mark> Starter projects

- https://subtle.blades.ninja/ 11ty micro-starter
- https://start.11ty.blades.ninja/ 7-in-1 starter (including Tailwind)
- https://jekyll.blades.ninja/ starter <!--{.faded}-->

---

## <sup style>Appendix</sup> Supported template engines {#engines}

### Nunjucks `.njk` {#njk}

Official docs:

- https://mozilla.github.io/nunjucks/templating.html
- https://mozilla.github.io/nunjucks/templating.html#builtin-filters

#### Syntax highlighting {#njk-vscode}

1. Install `ginfuru.better-nunjucks` = https://github.com/edheltzel/better-nunjucks-for-visual-studio-code

2. Set it as default formatter

This is a modern fork of the original extension. It is specifically designed to solve the "11ty problem" where you mix Nunjucks and HTML.

**Why it's better:** It injects Nunjucks grammar directly into the standard HTML grammar. This means you get full Nunjucks highlighting and the editor still knows it's an HTML file, giving you better Emmet and CSS autocompletion.

**No Config:** It works out of the box without needing to manually map file associations in your settings.

#### Auto-formatting

1. Install `esbenp.prettier-vscode` = https://github.com/prettier/prettier-vscode

2. Install a compatible Prettier plugin for your project, for example:

```sh
npm i -D prettier-plugin-jinja-template
```

3. It might be tricky to find a well-maintained Nunjucks plugin, but `jinja-template` works just fine with `.njk` via `.html` override:

```json {data-caption=.prettierrc.json}
{
  "plugins": ["prettier-plugin-jinja-template"],
  "overrides": [
    {
      "files": ["*.njk", "*.html"],
      "options": {
        "parser": "jinja-template"
      }
    }
  ]
}
```

Live example: https://github.com/anyblades/blades/blob/main/.prettierrc.json

---

### Liquid `.liquid` {#liquid}

Official docs:

- https://shopify.github.io/liquid/basics/introduction/
- https://shopify.github.io/liquid/#filters-section

#### Syntax highlighting & auto-formatting {#liquid-vscode}

1. Simply install `Shopify.theme-check-vscode` = https://shopify.dev/docs/storefronts/themes/tools/shopify-liquid-vscode

That's it! Thanks to Shopify, you do not need to install Prettier separately to format your Liquid code.

The `Shopify.theme-check-vscode` extension comes bundled with its own instance of the Prettier Liquid plugin, so it works completely out of the box.

---

### Twig `.twig` <mark>NEW</mark>

Docs in progress.

---

### Available templates
