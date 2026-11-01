# Hub dati: decision calculators for personal finance

**Live:** https://loreng0309.github.io/analisivita

Big money decisions, tested on your own numbers. Seven browser-based tools for the Italian context (buy or rent, mortgage, car, investing, financial independence). Every result shows its assumptions, sources and limits.

## Problem

Big money decisions (buy or rent, how much down payment, how to finance a car, how much to invest) are usually answered with rules of thumb or a bank's sales pitch. Online calculators return a single number built on assumptions you cannot see or change.

## Solution

You enter your own numbers. Each tool shows the break-even point, the year-by-year result and, where it matters, a range of simulated market scenarios instead of one forecast.

| Category | Tool |
|---|---|
| Real estate | Down payment or 100% mortgage? · Buy or rent? |
| Planning | Freedom quadrant (Italy / Switzerland) · Human capital and portfolio · Investment lab · Monthly savings plan |
| Mobility | True cost of a car over 3–10 years |

The tools are in Italian and use Italian tax rules (data as of Oct 2026).

## Product choices

1. **Decisions, not calculators.** Each tool is framed as a question and answers with a break-even point or a verdict.
2. **Assumptions are visible and editable.** In most tools, defaults come with a source, a date and a status (verified or estimate).
3. **Limits are stated.** Most tools list what the model does not cover.
4. **Uncertainty as ranges.** Five tools use seeded Monte Carlo simulation, so results are ranges and are reproducible.
5. **Privacy by design.** Static site, no backend; what you enter is never sent to a server.
6. **Cheap to extend.** A new tool is one HTML file plus one entry in `tools.js`.

## Status and next steps

A working prototype built by one person. Next: privacy-friendly analytics to see which tools are actually used, short usability tests with real users, automated tests for the financial models, shareable result links.

The tools compare scenarios; they are not financial, tax or legal advice.

## Run locally

```
python3 -m http.server 8000
```

then open http://localhost:8000.

## Add a tool

1. Put the HTML file in `tools/`.
2. Add an object to the `tools` array in `tools.js` (optional flags: `featured`, `simulation`).

## Optional analytics

Set `analytics.goatcounter` in `tools.js` to your [GoatCounter](https://www.goatcounter.com) code to count page views per tool and a few events (first interaction, returning visitor). Cookie-free; left empty, the site makes no tracking requests. If you turn it on, the privacy line on the About page updates automatically.

## Built with

Vanilla HTML, CSS and JavaScript on GitHub Pages. No framework, no build step. Chart.js is bundled inline in some tools.
