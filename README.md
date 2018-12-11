![Eustace](https://raw.githubusercontent.com/paulshryock/Eustace/master/favicon.ico)

# Eustace
> Start from scratch without reinventing the wheel

This starter package leverages a front end boilerplate, kitchen sink, and some sensible styling defaults to avoid typing the same things for each project.

![Screenshot](https://raw.githubusercontent.com/paulshryock/Eustace/master/img/screenshot.png "Screenshot")

The goal is for every project to possess the following qualities:

- **Accessible**: Content is accessible to everyone, regardless of ableness
- **Client-agnostic**: Content is accessible on every device, operating system, browser or non-browser client (i.e. RSS reader, "Read Only" mode, etc.)
- **Connection-agnostic**: Content is accessible while offline, once cached
- **Content-agnostic**: Markup, styles, and scripts work with all types of content
- **Device-agnostic**: Content is not styled or optimized for certain devices, but rather styled and optimized for any device
- **Flexible**
- **Inclusive**
- **JavaScript-agnostic**: Content and functionality are accessible without JavaScript
- **Mobile-first**: Design for mobile, enhance for larger screens
- **Performant**: Content loads in under 2000ms
- **Progressively-Enhanced**: Enhance markup and styling in browsers and environments supporting modern layout methods and JavaScript features, instead of breaking layouts and features in non-supporting environments
- **Responsive**: Look good on all devices and screen sizes
- **Secure**
- **Simple**: Reduce complexity wherever possible
- **Style-agnostic**: Content and functionality are accessible without CSS; source order always makes sense
- **Zero Dependencies**: Get up and running without any build tools, pre-processors, or 3rd-party scripts

## Lighthouse Audits

### Mobile

- Performance: <span style="color: green;">100%</span>
- Progressive Web App: <span style="color: orange;">65%</span>
	- Does not respond with a 200 when offline
	- User will not be prompted to Install the Web App
	- Does not register a service worker
- Accessibility: <span style="color: green;">100%</span>
- Best Practices: <span style="color: green;">93%</span>
	- Does not use HTTP/2 for all of its resources
- SEO: <span style="color: green;">100%</span>

## Features

- [Accessible Patterns](http://www.a11ymatters.com/patterns/)
	- [Mobile navigation](http://www.a11ymatters.com/pattern/mobile-nav/)
	- [Skip navigation link](http://www.a11ymatters.com/pattern/skip-link/)
	- [Pagination](http://www.a11ymatters.com/pattern/pagination/)
- [Inclusive Components](https://inclusive-components.design/)
	- [Cards](https://inclusive-components.design/cards/)
- Accessibility First form elements
	- [Toggle Switch](https://dev.to/link2twenty/accessibility-first-toggle-switches-3obj)
	- [Text Input](https://dev.to/link2twenty/accessibility-first-text-input-1l7l) _(coming soon)_
	- [Radio Buttons](https://dev.to/link2twenty/accessibility-first-radio-buttons-2302) _(coming soon)_
- Components
	- Accordion
	- Avatar
	- Blockquote
	- Breadcrumb
	- Code
	- Table
- Templates
	- Archive
	- Article
	- Boilerplate
	- Form

## Roadmap
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

## Quick Start

Download or clone this repo into a folder _(i.e. `Hello-World`)_ and open `index.html`.

```shell
$ git clone https://github.com/paulshryock/Eustace Hello-World
$ cd Hello-World
$ open index.html
```

## Contributing

If you'd like to contribute, please read the [Code of Conduct](https://github.com/paulshryock/Eustace/blob/master/CODE_OF_CONDUCT.md), then fork the repository and use a feature
branch. Pull requests are welcome.

### Your First Contribution

Working on your first Pull Request? You can learn how from this *free* series, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

### Team

- [Paul Shryock](https://github.com/paulshryock) -- Lead Front End Developer

### Thanks

- [Josh Buchea](https://gethead.info/)
- [Web Robot Pages](http://www.robotstxt.org/)
- [humans.txt](http://humanstxt.org/)
- [Eric Rasch](https://codepen.io/ericrasch/pen/qIiyK)
- [Ahmad Shadeed](http://www.a11ymatters.com/patterns/)
- [Khan Academy](http://khan.github.io/tota11y/)
- [Heydon Pickering](https://inclusive-components.design/)
- [Jeremy Thomas](https://jgthms.com/minireset.css/)
- [Nicolas Gallagher](github.com/necolas/normalize.css)
- [Sarah Cope](https://css-tricks.com/almanac/properties/q/quotes/)
- [Tim Brown](https://abookapart.com/products/flexible-typesetting)
- [Kinyanjui Wangonya](https://dev.to/wangonya/better-consolelogs-448c)
- [Nathan Swartz](https://clicknathan.com/web-design/form-ipsum/)
- [Andrew Bone](https://dev.to/link2twenty)

## Links

- Project homepage: [https://paulshryock.github.io/Eustace/](https://paulshryock.github.io/Eustace/)
- Repository: [https://github.com/paulshryock/Eustace](https://github.com/paulshryock/Eustace)
- Releases:
	- [v1.0.0 - Initial release](https://github.com/paulshryock/Eustace/releases/tag/v1.0.0)
		- [v1.0.1 - Accordion, Blockquote, Cards, Code](https://github.com/paulshryock/Eustace/releases/tag/v1.0.1)
		- [v1.0.2 - button_cta, Screenshot, Templates, Boilerplate](https://github.com/paulshryock/Eustace/releases/tag/v1.0.2)
		- [v1.0.3 - Forms, Lists, Pre, Scrolling](https://github.com/paulshryock/Eustace/releases/tag/v1.0.3)
		- [v1.0.4 - Table, Colors, README](https://github.com/paulshryock/Eustace/releases/tag/v1.0.4)
	- [v2.0.0 - Rename project](https://github.com/paulshryock/Eustace/releases/tag/v2.0.0)
		- [v2.0.1 - Hamburger Menu Icon](https://github.com/paulshryock/Eustace/releases/tag/v2.0.1)
		- [v2.0.2 - Avatar, Typography](https://github.com/paulshryock/Eustace/releases/tag/v2.0.2)
		- [v2.0.3 - Breadcrumb, Toggle](https://github.com/paulshryock/Eustace/releases/tag/v2.0.3)
		<!-- - [v2.0.4 - Text Inputs, Radio Buttons](https://github.com/paulshryock/Eustace/releases/tag/v2.0.4) -->
		<!-- - [v2.0.5 - XXXXXX](https://github.com/paulshryock/Eustace/releases/tag/v2.0.5) -->
		<!-- - [v2.0.6 - XXXXXX](https://github.com/paulshryock/Eustace/releases/tag/v2.0.6) -->
		<!-- - [v2.0.7 - XXXXXX](https://github.com/paulshryock/Eustace/releases/tag/v2.0.7) -->
		<!-- - [v2.0.8 - XXXXXX](https://github.com/paulshryock/Eustace/releases/tag/v2.0.8) -->
		<!-- - [v2.0.9 - XXXXXX](https://github.com/paulshryock/Eustace/releases/tag/v2.0.9) -->
- Issue tracker: [https://github.com/paulshryock/Eustace/issues](https://github.com/paulshryock/Eustace/issues)
  - In case of sensitive bugs like security vulnerabilities, please contact
    [paul@pshry.com](mailto:paul@pshry.com) directly instead of using issue tracker. We value your effort
    to improve the security and privacy of this project!
- Related projects:
  - **Myrtle**: [https://github.com/paulshryock/Myrtle](https://github.com/paulshryock/Myrtle): _Start Cockpit from scratch without reinventing the wheel_
  - **Brimbly**: [https://github.com/paulshryock/Brimbly](https://github.com/paulshryock/Brimbly): _Start WordPress from scratch without reinventing the wheel_

## Licensing

The code in this project is licensed under [GNU General Public License v3.0](https://github.com/paulshryock/Eustace/blob/master/LICENSE).