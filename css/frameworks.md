---
permalink: /css/frameworks/
eleventyNavigation:
  parent: Get started
  key: Frameworks
  order: 11
title: CSS Frameworks 2026-2040
---

| Framework       | 2011           | 2013           | 2014           | 2016           | 2017           | 2020           | 2022           | 2025           | 🚥  | _2026_           | _2030_           | _2040_           |
| --------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | --- | ---------------- | ---------------- | ---------------- |
| Tailwind        | —              | —              | —              | —              | 🚀             | 26%            | 46%            | <big>75</big>% | 🟢  | <big>_82%_</big> | <big>_88%_</big> | <big>_95%_</big> |
| Bootstrap       | 🚀             | <big>25</big>% | <big>38</big>% | <big>52</big>% | <big>64</big>% | <big>86</big>% | <big>78</big>% | 54%            | 🟠  | _48%_            | _35%_            | _20%_            |
| Pico / Blades   | —              | —              | —              | —              | —              | 🚀             | 3%             | 13%            | 🟢  | _15%_            | _20%_            | _25%_            |
| Bulma           | —              | —              | —              | 🚀             | 12%            | 33%            | 26%            | 19%            | 🔴  | _15%_            | _8%_             | —                |
| Foundation      | 🚀             | 12%            | 18%            | 24%            | 27%            | 28%            | 18%            | 14%            | 🔴  | _10%_            | _5%_             | —                |
| Semantic UI     | —              | 🚀             | 10%            | 20%            | 24%            | 22%            | 16%            | 8%             | 🔴  | _6%_             | _2%_             | —                |
| Materialize     | —              | —              | 🚀             | 15%            | 22%            | 25%            | 18%            | 9%             | 🔴  | _7%_             | _3%_             | —                |
| 960 Grid System | <big>48</big>% | 15%            | —              | 2%             | —              | —              | —              | —              | ❌  | —                | —                | —                |
| Blueprint CSS   | 22%            | 6%             | —              | —              | —              | —              | —              | —              | ❌  | —                | —                | —                |

{.striped}

<style>table {
  big { font-weight: bold }
  :is(th, td):not(:first-child) { text-align: center }
  tbody tr:nth-last-child(-n+6) { opacity: 50% }
  tbody tr:nth-last-child(-n+2) { opacity: 25% }
}</style>

<small>Percentages represent self-reported developer usage rates for each CSS framework based on the annual [State of CSS Survey](https://stateofcss.com). Percentages do not sum to 100% because developers often use multiple frameworks simultaneously. Historical data (2011–2025) is based on developer survey results; future projections (2026–2040) are estimates based on current trajectories. Survey data reflects active developer adoption and differs from web-wide deployment statistics (e.g., [W3Techs](https://w3techs.com/technologies/details/cl-cssframework)), where legacy systems still maintain a massive footprint.</small>

## Trends

- **Tailwind** 🚀 remains the dominant utility-first standard for new projects, though in 2026 Tailwind Labs faced a major revenue drop (resulting in a 75% engineering layoff) due to AI coding tools generating utility styles directly and bypassing documentation/UI template sales.
- **Bootstrap** 📉 continues to decline in developer satisfaction/interest, but maintains a massive legacy base; its v5+ utility API has helped keep it relevant as a hybrid option.
- **Pico / Blades** 📈 emerging as a developer favorite for minimalist, semantic-first, and zero-JS setups (classless approach styling native HTML elements directly). Blades CSS is the new, fully compatible, and actively maintained successor to Pico CSS (which was last updated >1y ago).
- **Bulma**, **Foundation**, **Semantic UI**, and **Materialize** 📉 phasing out of active mainstream usage (dropping to under 10% active developer usage), transitioning into stable/maintenance status for legacy applications.
- **960 Grid System** and **Blueprint CSS** 🛑 completely obsolete, legacy tools from the fixed-width desktop grid era before responsive web design became standard.

## References

- Historical developer adoption and usage rates: [State of CSS Surveys (2019–2025)](https://stateofcss.com)
- Web-wide CSS framework market share statistics: [W3Techs CSS Frameworks Market Share](https://w3techs.com/technologies/details/cl-cssframework)
- Framework release dates:
  - Blueprint CSS: [Christian Montoya (2007)](https://github.com/joshuaclayton/blueprint-css)
  - 960 Grid System: [Nathan Smith (2008)](https://github.com/nathansmith/960-Grid-System)
  - Bootstrap: [Jacob Thornton & Mark Otto (2011)](https://github.com/twbs/bootstrap)
  - Foundation: [ZURB (2011)](https://github.com/foundation/foundation-sites)
  - Semantic UI: [Jack Lukic (2013)](https://github.com/Semantic-Org/Semantic-UI)
  - Materialize: [Alvin Wang (2014)](https://github.com/Dogfalo/materialize)
  - Bulma: [Jeremy Thomas (2016)](https://github.com/jgthms/bulma)
  - Tailwind CSS: [Adam Wathan (2017)](https://github.com/tailwindlabs/tailwindcss)
  - Pico / Blades: [Lucas Larroche (2020)](https://github.com/picocss/pico) / [Anton Staroverov (2026)](https://github.com/anyblades/blades)
