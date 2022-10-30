import { createElement } from './utils'
import styles from './main.css'

const style = createElement('style')
style.textContent = styles
document.head.appendChild(style)
