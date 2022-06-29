<div align="right">
  语言:
  中文
  <a title="English" href="/README_EN.md">English</a>
</div>

<h1 align="center"><a href="https://github.com/Lete114/CardLink" target="_blank">CardLink</a></h1>
<p align="center">为页面上的超链接生成卡片式链接</p>

<p align="center">
    <a href="https://github.com/Lete114/CardLink/releases/"><img src="https://img.shields.io/npm/v/cardlink?logo=npm" alt="Version"></a>
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
  document.querySelector('a#example').setAttribute('cardlink', '')
  // 默认会对页面上所有a[cardlink]生成卡片链接
  cardLink()
</script>
```

3. 使用方法

```html
<script>
  // 传入一个数组，且数组中是标签元素
  const a1 = document.createElement('a')
  a1.href = 'https://example.com/'
  const a2 = document.createElement('a')
  a2.href = 'https://www.example.com/'

  // 如果你担心这会影响页面正常的显示效果，可以将其隐藏
  a1.style.visibility = 'hidden'
  a2.style.visibility = 'hidden'
  // or
  // a1.style.display = 'none'
  // a2.style.display = 'none'

  // 必须先将元素添加到页面上
  document.body.appendChild(a1)
  document.body.appendChild(a2)

  cardLink([a1, a2])
</script>
```

## 选项 API

### cardLink(nodes)

类型: `NodeList`

默认值: `document.querySelectorAll('a[cardlink]')`

默认会对页面上所有`a[cardlink]`生成卡片链接

## 效果图

![card-link](https://user-images.githubusercontent.com/48512251/176334068-9eaaefeb-baa1-4a45-8dd8-7d0cbe6c6f29.png)
