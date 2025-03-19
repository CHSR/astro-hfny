# ![HFNY](/public/images/HFNY_logo_mobile_1-100.png) ➕ ![Astro](/public/astro-logo-100.png) = 💟

This is a rewrite of the Healthy Families New York informational web site located at http://www.healthyfamiliesnewyork.org.

The goal of the rewrite is to make the code more maintainable, understandable, and future tech friendly. This is accomplished by using the Astro front-end framework. The current, legacy site is a static site (with a few exceptions, i.e. search, login, etc.), but is designed so that every page transition requires a page load and server round trip. Astro embraces the static nature of the site and does an awesome job optimizing the performance.

Specifically, here are some design goals:

- Reduce duplication
  - Every single page in the legacy site must include the layout, styling, and code for the:
    - Header
    - Footer
    - Navigation menu and sub-menus
    - Bloated single CSS file
- Ease maintainability
  - Adding new features is very difficult with the legacy app
  - Introducing a SPA methodology eliminates page loads and server round trips
- Enforce the single purpose for each section of the pages through Astro's component-based model
- Take advantage of the momentum of Astro, with it's large community of developers and rich extension pool:
  - To make it easier to add new features, including some much-needed interactivity and ease-of-use
  - To refactor current features that currently have many drawbacks, specifically authentication
