<div align="right">
  Language:
  English
  <a title="中文" href="/README.md">中文</a>
</div>

<h1 align="center"><a href="https://github.com/Lete114/CardLink" target="_blank">CardLink</a></h1>
<p align="center">Generate card-based links for hyperlinks on the page</p>

<p align="center">
    <a href="https://github.com/Lete114/CardLink/releases/"><img src="https://img.shields.io/npm/v/cardlink?logo=npm" alt="Version"></a>
    <a href="https://github.com/Lete114/visitor-badge"><img src="https://visitor_badge.deta.dev/?pageID=github.Lete114.CardLink" alt="visitor_badge"></a>
    <a href="https://github.com/Lete114/CardLink/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/cardlink?color=FF5531" alt="MIT License"></a>
</p>

## Installation

Using npm:

```bash
npm install cardlink --save
```

Using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/cardlink"></script>
```

## Usage

ESModule Modules

```js
import cardLink from 'cardlink'
```

CommonJS Modules

```js
const cardLink = require('cardlink')
```

Browser

1. Usage

```html
<script>
  cardLink(document.querySelectorAll('article a[target=_blank]'))
</script>
```

2. Usage

```html
<script>
  // Set the cardlink property for the specified a tag, and finally call cardLink()
  document.querySelectorAll('article a[target=_blank]').forEach((el) => {
    el.setAttribute('cardlink', '')
  })

  // OR
  document.querySelector('a#example').setAttribute('cardlink', '')

  // By default, card links are generated for all `a[cardlink]` on the page
  cardLink()
</script>
```

## Problems

Since this is a front-end request for HTML, some sites may have cross-domain (CORS) issues, so `cardLink` allows you to use a proxy server to request HTML from the target site

```html
<script>
  // Note: cardLink sends requests to the proxy server only when cross-domain requests occur (thus reducing the pressure on the proxy server)
  // Preset the proxy server before executing cardLink
  cardLink.server = 'https://api.allorigins.win/raw?url='

  cardLink(document.querySelectorAll('article a[target=_blank]'))
</script>
```

## Options API

### cardLink(nodes)

Type: `NodeList`

default: `document.querySelectorAll('a[cardlink]')`

By default, card links are generated for all `a[cardlink]` on the page

## Design Sketch

![card-link](https://user-images.githubusercontent.com/48512251/176334068-9eaaefeb-baa1-4a45-8dd8-7d0cbe6c6f29.png)
