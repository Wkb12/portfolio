# CSS Documentation for Beginners (`w.css`)

This guide explains the CSS in `w.css` in simple language.

The stylesheet builds a dark-themed portfolio site with:
- a loading screen (preloader)
- navigation bar
- hero/profile section
- skills cards
- project cards
- contact/social section

---

## 1) Global Reset

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

What this does:
- `*` selects every element.
- `margin: 0` removes default outside spacing.
- `padding: 0` removes default inside spacing.
- `box-sizing: border-box` makes width/height include padding + border.

Why it is useful:
- Creates a predictable layout in all browsers.

---

## 2) CSS Variables (`:root`)

```css
:root {
    --bg: #000000;
    --text: #ffffff;
    ...
}
```

What this does:
- `:root` stores reusable values as **custom properties** (variables).
- Example: `--bg` is background color, `--accent` is highlight color.

Why it is useful:
- Change theme colors in one place.
- Keeps code cleaner and easier to maintain.

Examples from the file:
- Colors: `--bg`, `--text`, `--accent`, `--muted`
- Borders: `--border`, `--soft-border`
- Shadows: `--shadow-lg`, `--shadow-md`, `--shadow-sm`

How used later:
```css
background: var(--bg);
color: var(--text);
```

---

## 3) `body` Base Style

```css
body {
    font-family: 'Inter', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.95;
    scroll-behavior: smooth;
}
```

Meaning:
- Sets global font and dark background.
- `line-height: 1.95` gives roomy text spacing.
- `scroll-behavior: smooth` makes anchor-link scrolling smooth.

---

## 4) Preloader (Loading Screen)

Classes:
- `.preloader`
- `.preloader--hidden`
- `.preloader-inner`
- `.preloader-circle`
- `.preloader-spinner`
- `.preloader-logo`

### `.preloader`
- `position: fixed; inset: 0;` covers whole screen.
- Flex centering puts loader in the middle.
- `z-index: 9999` keeps it above all content.
- Transition allows fade-out animation.

### `.preloader--hidden`
- `opacity: 0` fades out.
- `visibility: hidden` hides element from view.
- `pointer-events: none` stops interaction.

### Spinner and logo
- `.preloader-spinner` creates a circular border spinner.
- `border-top-color: var(--accent)` makes one segment bright.
- `animation: preloader-spin 1s linear infinite` rotates forever.
- `.preloader-logo` is centered circle with gradient and pulse animation.

### Keyframes
```css
@keyframes preloader-spin {
    to { transform: rotate(360deg); }
}
@keyframes preloader-pulse {
    0%,100% { transform: scale(1); }
    50% { transform: scale(0.96); }
}
```
- `preloader-spin`: full rotation.
- `preloader-pulse`: slight zoom in/out.

---

## 5) Main Layout Container

```css
.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.8rem 2rem 3rem;
}
```

Meaning:
- Keeps page content centered.
- `max-width` prevents lines from becoming too wide.
- `margin: 0 auto` centers horizontally.
- `padding` gives inner spacing.

---

## 6) Navigation Bar

Classes:
- `.nav-bar`
- `.nav-logo`
- `.logo-bg`
- `.nav-link`
- `.nav-link i`
- `.nav-link:hover`

### `.nav-bar`
- Flex row aligned to right.
- `flex-wrap: wrap` lets links move to next line on smaller screens.
- Bottom border visually separates nav from content.

### Logo area
- `.nav-logo { margin-right: auto; }` pushes links to right.
- `.logo-bg` styles logo as square badge with gradient.

### Nav links
- `.nav-link` removes underline and styles color/weight.
- `transition: 0.2s` smooth hover change.
- On hover:
  - color changes to accent
  - `transform: translateY(-2px)` makes slight lift effect.

---

## 7) Profile Photo Frame

Classes:
- `.photo-frame`
- `.photo-frame img`

### `.photo-frame`
- Sized square `210px x 210px`.
- Rounded corners (`border-radius: 48px`).
- Gradient dark background, border, and large shadow.
- Flex center + `overflow: hidden` clips image corners.

### Image style
- Image fills frame (`width/height: 100%`).
- `object-fit: cover` avoids stretching.
- `object-position: center 20%` adjusts crop focus.

---

## 8) Hero Section

Classes:
- `.hero`
- `.hero-content`
- `.hero-badge`
- `.hero-content h1`
- `.hero-title`
- `.hero-desc`
- `.hero-stats`
- `.stat`

### `.hero`
- Flex layout for text + photo.
- Wraps on smaller width.
- Spacing via `gap` and `margin-bottom`.

### Badge
- Pill shape with small text and border.
- Uses green-ish accent palette.

### Main heading (`h1`)
- Big size (`3.1rem`) and bold.
- Gradient text effect using:
  - `background: linear-gradient(...)`
  - `background-clip: text`
  - `color: transparent`

### Supporting text
- `.hero-title` and `.hero-desc` set hierarchy and readability.

### Stats row
- `.hero-stats` is flex row.
- Each `.stat` is a pill card with border, blur backdrop, shadow.

---

## 9) Section Heading Style

Classes:
- `.section-title`
- `.section-title:after`

How it works:
- `.section-title` sets large heading style.
- `position: relative` is needed so pseudo-element can be positioned.
- `:after` creates decorative underline bar with gradient.

---

## 10) Skills Grid

Classes:
- `.skills-grid`
- `.skill-card-modern`
- `.skill-card-modern:hover`
- `.skill-icon`
- `.skill-card-modern img`
- `.skill-name`

### Grid container
- Uses flex with wrapping.
- `gap` sets equal spacing between cards.

### Skill card
- Dark box with rounded corners, shadow, border.
- `flex: 1 0 120px` means:
  - can grow (`1`)
  - base width around `120px`
- Hover lifts card and changes border/shadow color.

### Icon and text
- `.skill-icon` controls icon size.
- Image width set to `40px`.
- `.skill-name` is bold and larger for label emphasis.

---

## 11) Projects Grid

Classes:
- `.projects-grid`
- `.project-card`
- `.project-card:hover`
- `.project-category`
- `.project-title`
- `.project-desc`

### `.projects-grid`
- Uses CSS Grid:
  - `repeat(auto-fill, minmax(280px, 1fr))`
- This creates responsive columns:
  - each card minimum `280px`
  - grows to fill available space.

### Project cards
- Styled similarly to skill cards but larger padding.
- Hover changes border and shadow to accent tone.

### Text hierarchy
- `.project-category`: tiny uppercase label.
- `.project-title`: main heading.
- `.project-desc`: smaller muted description.

---

## 12) Contact Section

Classes:
- `.contact-section`
- `.contact-flex`
- `.contact-details p`
- `.social-buttons`
- `.social-btn`
- `.social-btn:hover`

### Contact container
- Rounded dark block with border and padding.

### Inner layout
- `.contact-flex` uses wrapping flex to place details and buttons.
- Works better on smaller screens because items can wrap.

### Contact text
- Paragraph rows are flex items with icon + text alignment.

### Social buttons
- Pill-shaped buttons with icon + text.
- Hover darkens button and border for feedback.

---

## 13) Common Techniques Used in This CSS

1. **Flexbox**
- Used for horizontal/vertical alignment and wrapping.
- Seen in nav, hero, stats, and contact areas.

2. **CSS Grid**
- Used for responsive project cards.

3. **Custom Properties (Variables)**
- Theme consistency and easy maintenance.

4. **Hover Animations**
- Adds interactivity with `transform`, `color`, `box-shadow`.

5. **Transitions**
- Makes changes smooth instead of instant.

6. **Shadows and Borders**
- Creates depth and card separation.

7. **Pseudo-elements**
- Decorative line under section titles using `:after`.

8. **Keyframe Animations**
- Spinner rotation and logo pulse for preloader.

---

## 14) Beginner Notes and Tips

- `rem` units scale better than fixed `px` for text/layout.
- Keep variable names meaningful (`--accent`, `--border`).
- Group related classes together (nav, hero, skills, projects).
- Reuse utility values (same border/shadow variables).
- For responsive behavior, combine:
  - `flex-wrap`
  - `auto-fill + minmax()` in grid.

---

## 15) Quick Visual Map (What controls what)

- Site theme colors/shadows: `:root`
- Whole page baseline: `body`
- Loading screen: `.preloader*` + `@keyframes`
- Main width and spacing: `.container`
- Top menu: `.nav-*`
- Intro/profile area: `.hero*` + `.photo-frame`
- Section headings: `.section-title`
- Skills cards: `.skills-*` + `.skill-*`
- Projects cards: `.projects-*` + `.project-*`
- Contact + social links: `.contact-*` + `.social-*`

---

## 16) Final Summary

This stylesheet is a clean portfolio design using a dark theme, reusable color variables, modern layout systems (Flexbox + Grid), and subtle animations for a polished look. For beginners, the most important learning points are:
- start with reset + variables
- build sections with flex/grid
- use reusable card patterns
- add hover/transition effects for better UX
- keep everything consistent with custom properties

---

## 17) How to customize (practical examples)

- Change the main accent color (example):

```css
:root { --accent: #ff7a59; }
```

- Make cards less rounded:

```css
.project-card { border-radius: 0.8rem; }
```

- Reduce the preloader size:

```css
.preloader-circle { width: 64px; height: 64px; }
.preloader-logo { width: 44px; height: 44px; font-size: 0.9rem; }
```

## 18) Next steps I can help with

- Add inline usage examples into `home.html` or `project.html`.
- Create a short cheat-sheet with the most-used class names.
- Make a lighter (light-mode) theme by changing `:root` variables and providing a toggle.

Tell me which of these you'd like me to do next.
