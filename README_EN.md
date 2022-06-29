<div align="right">
  Language:
  English
  <a title="中文" href="/README.md">中文</a>
</div>

<h1 align="center"><a href="https://github.com/Lete114/CardLink" target="_blank">CardLink</a></h1>
<p align="center">Generate card-based links for hyperlinks on the page</p>

<p align="center">
    <a href="https://github.com/Lete114/CardLink/releases/"><img src="https://img.shields.io/npm/v/cardlink?logo=npm" alt="Version"></a>
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
  document.querySelector('a#example').setAttribute('cardlink', '')
  // By default, card links are generated for all `a[cardlink]` on the page
  cardLink()
</script>
```

3. Usage

```html
<script>
  // Pass in an array and the array is label elements
  const a1 = document.createElement('a')
  a1.href = 'https://example.com/'
  const a2 = document.createElement('a')
  a2.href = 'https://www.example.com/'

  // If you are concerned that this will affect the normal display of the page, you can hide it
  a1.style.visibility = 'hidden'
  a2.style.visibility = 'hidden'
  // or
  // a1.style.display = 'none'
  // a2.style.display = 'none'

  // Elements must first be added to the page
  document.body.appendChild(a1)
  document.body.appendChild(a2)

  cardLink([a1, a2])
</script>
```

## Options API

### cardLink(nodes)

Type: `NodeList`

default: `document.querySelectorAll('a[cardlink]')`

By default, card links are generated for all `a[cardlink]` on the page

## Design Sketch

![card-link](https://user-images.githubusercontent.com/48512251/176334068-9eaaefeb-baa1-4a45-8dd8-7d0cbe6c6f29.png)
