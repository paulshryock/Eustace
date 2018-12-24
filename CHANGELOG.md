# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Roadmap
- Address TODOs in `css/style.css`
	- Accessibility First Toggle Switch
	- Under-Engineered Custom Radio Buttons and Checkboxen
		- Add [Accessibility First Radio Buttons](https://dev.to/link2twenty/accessibility-first-radio-buttons-2302)
- Add [Accessibility First Text Input](https://dev.to/link2twenty/accessibility-first-text-input-1l7l)
- Add Components
	- Image Lightbox, if this makes any sense in 2019
- Add Templates
	- Archive Types
		- Author
		- Category
		- Date
	- Media Gallery
	- Portfolio
	- Project
	- Product
	- Video
- Style elements
	- Responsive tables
	- Form elements
	- button_cta shadow
	- Accessible colors
- Add [Inclusive Components](https://inclusive-components.design/)
	- [Data Tables](https://inclusive-components.design/data-tables/)
	- [Notifications](https://inclusive-components.design/notifications/)
	- [A Content Slider](https://inclusive-components.design/a-content-slider/)
	- [Collapsible Sections](https://inclusive-components.design/collapsible-sections/)
	- [Tabbed Interfaces](https://inclusive-components.design/tabbed-interfaces/)
	- [A Theme Switcher](https://inclusive-components.design/a-theme-switcher/)
	- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/)
	- [Menus & Menu Buttons](https://inclusive-components.design/menus-menu-buttons/)
	- [A Todo List](https://inclusive-components.design/a-todo-list/)
	- [Toggle Buttons](https://inclusive-components.design/toggle-button/)
- Incorporate [a11y_styled_form_controls](https://scottaohara.github.io/a11y_styled_form_controls/) if it makes sense

<!--
## X.X.X - XXXX-XX-XX - XXXXXX

### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
-->

## 2.6.0 - 2018-12-24 - Posts, Lists, Breadcrumbs

### Changed
- Update post markup
- Style lists
- Style breadcrumbs

## 2.5.0 - 2018-12-19 - Render-Blocking Resources

### Added
- Add `async` attribute to linked scripts
- Add `media` attribute to linked stylesheets

## 2.4.0 - 2018-12-11 - Service Worker

### Added
- Add web manifest
- Add service worker
- Add `offline.html` template

### Changed
- Update screenshot
- Update `README.md`
- Update meta theme-color
- Update meta manifest link

## 2.3.0 - 2018-12-10 - Breadcrumb, Toggle

### Added
- Add Breadcrumb
- Add [Accessibility First Toggle Switch](https://dev.to/link2twenty/accessibility-first-toggle-switches-3obj)
- Add Form Template table of contents

## 2.2.0 - 2018-11-24 - Avatar, Typography

### Added
- Add open type features
- Add avatar component

### Changed
- Update markup
- Style avatar images
- Style typography

## 2.1.0 - 2018-11-23 - Hamburger Menu Icon

### Added
- Add hamburger menu icon

### Changed
- Change navigation button markup
- Style button element

### Removed
- Remove grid layout

## 2.0.0 - 2018-11-19 - Rename project

### Changed
- Rename project

## 1.4.0 - 2018-11-16 - Table, Colors, README

### Added
- Add `README.md` installation instructions
- Add `README.md` contributing instructions
- Add `README.md` logo
- Add Table component
- Add colors

### Changed
- Rearrange `README.md` content
- Update `.gitignore`
- Update project roadmap
- Update `README.md` goals

### Removed
- Remove `README.md` comments

## 1.3.0 - 2018-10-31 - Forms, Lists, Pre, Scrolling

### Added
- Add `form.html`

### Changed
- Style pre elements
- Style responsive forms and form elements
- Style list elements
- Update `components.html` markup
- Update `index.html` markup
- Update `archive.html` pagination markup

### Removed
- Remove navigation items from `template.html`

### Fixed
- Fix scroll jump
- Fix site-footer width

## 1.2.0 - 2018-10-27 - button_cta, Screenshot, Templates, Boilerplate

### Added
- Add main content id
- Add button_cta
- Add screenshot
- Add `templates.html` and `boilerplate.html`

### Changed
- Style article images
- Rename .site-navigation to .navigation
- Rename Articles template to Archive
- Update components list markup
- Update navigation

## 1.1.0 - 2018-10-26 - Accordion, Blockquote, Cards, Code

### Added
- Add smooth scrolling for ID links
- Add Releases to `README.md`
- Add Components
	- Accordion
	- Blockquote
	- Code
- Add [Inclusive Components](https://inclusive-components.design/)
	- [Cards](https://inclusive-components.design/cards/)

### Changed
- Style elements
	- Hyperlinks
	- Articles
- Rename `test.html` to `components.html`
- Update navigation
	- Remove dead links
	- Update href attributes
- Customize console.log()
- Update `humans.txt`

### Removed
- Banish .DS_Store

## 1.0.0 - 2018-10-19 - Initial Release

This starter package leverages a front end boilerplate, kitchen sink, and some sensible styling defaults to avoid typing the same things for each project. The goal is for every project to possess the following qualities: Accessible, Client-agnostic, Content-agnostic, Device-agnostic, Flexible, Inclusive, Mobile-first, Performant, Responsive, Secure, and Simple.

### Added
- Add HTML
	- Boilerplate elements and meta tags
	- Kitchen sink
- Add CSS
	- Boilerplate comments
	- Element defaults
- Add `robots.txt` and `humans.txt`
- Add `LICENSE`, `README.md`, and `CHANGELOG.md`
- Add [Accessible Patterns](http://www.a11ymatters.com/patterns/)
	- [Mobile navigation](http://www.a11ymatters.com/pattern/mobile-nav/)
	- [Skip navigation link](http://www.a11ymatters.com/pattern/skip-link/)
	- [Pagination](http://www.a11ymatters.com/pattern/pagination/)