<div align="right">
  语言:
  中文
  <a title="English" href="/README_EN.md">English</a>
</div>

<h1 align="center"><a href="https://github.com/Lete114/CardLink" target="_blank">CardLink</a></h1>
<p align="center">为页面上的超链接生成卡片式链接</p>

<p align="center">
    <a href="https://github.com/Lete114/CardLink/releases/"><img src="https://img.shields.io/npm/v/cardlink?logo=npm" alt="Version"></a>
    <a href="https://github.com/Lete114/visitor-badge"><img src="https://visitor_badge.deta.dev/?pageID=github.Lete114.CardLink" alt="visitor_badge"></a>
    <a href="https://github.com/Lete114/CardLink/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/cardlink?color=FF5531" alt="MIT License"></a>
</p>

## 安装

Using npm:

```bash
npm install cardlink --save
```

Using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/cardlink"></script>
```

## 使用方法

ESModule 模块

```js
import cardLink from 'cardlink'
```

CommonJS 模块

```js
const cardLink = require('cardlink')
```

浏览器

1. 使用方法

```html
<script>
  // 为<article></article>(文章)标签下所有打开新标签窗口的a标签生成卡片链接
  cardLink(document.querySelectorAll('article a[target=_blank]'))
</script>
```

2. 使用方法

```html
<script>
  // 为指定的a标签设置cardlink属性，最后调用cardLink()
  document.querySelectorAll('article a[target=_blank]').forEach((el) => {
    el.setAttribute('cardlink', '')
  })

  // 或
  document.querySelector('a#example').setAttribute('cardlink', '')

  // 默认会对页面上所有a[cardlink]生成卡片链接
  cardLink()
</script>
```

## 存在的问题

由于这是前端发送请求获取 HTML，可能部分网站会存在跨域 (CORS) 问题，所以 `cardLink` 允许你使用代理服务器去请求目标网站的 HTML

```html
<script>
  // 注意: 只有发生跨域请求时，cardLink 才会将请求发送到代理服务器(以此可以减轻代理服务器的压力)
  // 在执行 cardLink 之前预设代理服务器
  cardLink.server = 'https://api.allorigins.win/raw?url='

  // 为<article></article>(文章)标签下所有打开新标签窗口的a标签生成卡片链接
  cardLink(document.querySelectorAll('article a[target=_blank]'))
</script>
```

## 选项 API

### cardLink(nodes)

类型: `NodeList`

默认值: `document.querySelectorAll('a[cardlink]')`

默认会对页面上所有`a[cardlink]`生成卡片链接

## 效果图

![card-link](https://user-images.githubusercontent.com/48512251/176334068-9eaaefeb-baa1-4a45-8dd8-7d0cbe6c6f29.png)
