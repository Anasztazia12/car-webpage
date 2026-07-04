# CarnovoX Motor

![CarnovoX Motor - responsive design](assets/images/responsive-car.png)

Modern, bilingual (HU/EN) car dealership website. Plain HTML/CSS/JS, no build step - open `index.html` in a browser, or upload it to any static host.

**Live site:** [carnovox-motor.amethyst-nexalune.co.uk](https://carnovox-motor.amethyst-nexalune.co.uk/)

## Design approach (five planes of UX)

### Strategy

Used-car buyers are wary by default - concealed faults, rolled-back odometers and pushy haggling are the reputation this site has to overcome. The strategy is to sell trust before it sells cars: lead with inspection/warranty guarantees, back every claim with specifics (120-point checklist, real mileage, transparent pricing), and give a UK-based buyer the same confidence as a Budapest-based one by treating the two markets as genuinely separate, real dealership locations rather than a single site with a language toggle bolted on.

### Scope

- Browse, filter (brand, body type, fuel, price) and sort a real inventory, per location
- See full car detail (photo, price, engine, power, gearbox, drivetrain, description) without leaving the list
- Contact the right office by phone, email, or form, with the correct address and map for that location
- Read the company's story, values, and team to support the trust argument from Strategy
- Full HU/EN bilingual coverage - not just UI strings, but inventory, staff names, and contact details per market

### Structure

Three pages share one navigation shell (`index.html`, `cars.html`, `about.html`) and one data source (`CARS_DATA` in `app.js`). The homepage's featured grid and the full inventory page both read from that same array, filtered by the active market - so there is exactly one place to add a car, not two. The quick-search form on the homepage hands off its filters to `cars.html` via query string, keeping the two pages in sync without any shared server state.

### Skeleton

Sticky header (logo, nav, language switch, phone, CTA) on every page; a filter toolbar sits directly above the results grid it controls; car cards use a consistent layout (photo, badge, spec icons, price, actions) whether they appear as "featured" or in the full list; clicking "Details" opens an in-place modal instead of navigating away, keeping the user's filtered results intact underneath.

### Surface

Dark navy and gold express "premium, trustworthy dealership" rather than "budget classifieds site"; Poppins for headings paired with Inter for body text; consistent line-style icons throughout; subtle motion (reveal-on-scroll, hover lift on cards, modal fade) signals polish without becoming a distraction.

## Screenshots

### Hero

![Hero section](assets/images/Screenshot%202026-07-04%20233405.png)

### Car details modal

![Range Rover Sport details](assets/images/Screenshot%202026-07-04%20233445.png)

### Quick search & stats

![Quick search and stats](assets/images/Screenshot%202026-07-04%20233507.png)

### Contact & map

![Contact section with embedded map](assets/images/Screenshot%202026-07-04%20233732.png)

### Testimonials

![Testimonials](assets/images/Screenshot%202026-07-04%20233746.png)

## Pages

- `index.html` - Home page (hero, quick search, featured cars, why us, process, testimonials, contact + map)
- `cars.html` - Full inventory with filtering (brand, body type, fuel, price), sorting and pagination
- `about.html` - About us (story, values, milestones, team, guarantees)

## Two locations, two currencies

The site simulates two independent dealership locations:

### Hungary (HU)

- Address: 1051 Budapest, Jozsef Attila utca 6.
- Currency: Ft
- Inventory: BMW, Audi, VW, Mercedes, Toyota, Skoda, Opel

### United Kingdom (EN)

- Address: 71-75 Shelton Street, London WC2H 9JQ
- Currency: GBP
- Inventory: Range Rover, MINI, Jaguar, Ford, VW

The language switcher (top right, EN/HU) swaps the entire UI as well as the inventory shown - the brand list stays the same everywhere, but only the cars actually in stock at that location show up as results.

## Adding / editing cars

The car list lives at the top of `assets/js/app.js`, in the `CARS_DATA` array. A single record looks like:

```js
{ id: 16, market: "hu", brand: "audi", model: "Audi Q8", img: "audi.png",
  year: 2022, km: 32000, price: 24990000, installment: 258900,
  fuel: "dizel", transmission: "automatic", body: "suv", badge: "new", featured: true,
  power: "286-340 hp", engineDesc: "3.0 V6 TFSI / 3.0 V6 TDI",
  drivetrain: "8-speed automatic, quattro all-wheel drive",
  description: "..." }
```

- `market`: `"hu"` or `"uk"` - which location it belongs to
- `img`: filename inside `assets/images/` (if missing, a styled placeholder icon shows automatically instead)
- `badge`: `"certified"`, `"sale"`, `"new"`, or `null`
- `featured`: `true` also shows it in the homepage's featured section
- The `description`/`engineDesc`/`drivetrain` fields should be written in that location's language (Hungarian for HU cars, English for UK cars), since they're only ever displayed in that language

Clicking "Details" opens the details modal built from these same fields (photo, price, engine, power, gearbox, drivetrain, description).

## Translations

Every piece of UI text lives in the `I18N` dictionary at the top of `app.js`, under the `hu` and `en` keys. To add new text: add a key in both languages, then reference it in HTML with `data-i18n="keyname"` (text content), `data-i18n-placeholder`, `data-i18n-href`, `data-i18n-src`, `data-i18n-alt`, or `data-i18n-content`.

## Folder structure

```text
index.html, cars.html, about.html   - pages
assets/css/style.css                - design system + every component's styling
assets/js/app.js                    - i18n, car data, filtering, modal, form, animations
assets/images/                      - photos (missing files fall back to an automatic placeholder)
```
