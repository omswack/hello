# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio website — no build step, no package manager, no framework. Open `index.html` directly in a browser to preview.

## File roles

- `index.html` — single-page site with three sections: hero/slogan, Projects, About
- `design.css` — layout, nav, project card (`.tblock`) expand/collapse behavior, scroll-snap
- `style.css` — hero typography (Staatliches font, large sizes), responsive breakpoints for the hero section specifically
- `scripts.js` — jQuery hover/click logic for `.tblock` expand/collapse
- External deps loaded via CDN: Bootstrap 4, jQuery 3, Google Fonts (Merriweather, Staatliches)

## Key design patterns

**Hero layout** (`style.css`): The "Data / Scientist. / Problem Solver." stacked text uses absolute pixel sizes at each breakpoint (four breakpoints: `<430px`, `430–768px`, `769–1024px`, `1025–1390px`, and unstyled ≥1390px). All font sizes and margins are manually scaled — there is no fluid/clamp approach.

**Project cards** (`.tblock` in `design.css`): Cards start collapsed at `height: 85px`. On hover they expand width to 95% and reveal `.tblock-big` via `opacity` transition with a 0.5s delay. `scripts.js` adds/removes the `.active` class to keep a card open after hover ends and collapses it on outside click.

**Scroll snap** (`design.css`): `main` uses `scroll-snap-type: y mandatory`. Sections with `.scroll-item-top` snap to `start`; on viewports ≤992px, `.snap_item` also snaps.

## Responsive strategy

- Hero text is in `style.css` with four explicit `@media` breakpoints, each fully re-declaring all font sizes and margins.
- Layout/card/nav responsiveness is in `design.css` with overlapping breakpoints (`≤530px`, `≤768px`, `≤992px`, `≤1024px`, `1025–1390px`).
- The `top_page_temp.html` / `style_temp.css` files are scratch/prototype files, not part of the live site.