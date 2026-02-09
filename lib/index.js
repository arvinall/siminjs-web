import { provide } from '@siminjs/render/env.js'

provide('createText' ,v => document.createTextNode(v ?? ''))
provide('updateText' ,(t ,v) => (t.data = v ?? ''))

provide('createElement' ,(t ,isSvg) => document.createElement(t))

provide('append' ,(dest ,...nodes) => dest.append(...nodes))
provide('replace' ,(dest ,...nodes) => dest.replaceWith(...nodes))
provide('remove' ,n => n.remove())

provide('setAttribute' ,(n ,k ,v) => n.setAttribute(k ,v))
provide('removeAttribute' ,(n ,k) => n.removeAttribute(k))

provide('isNode' ,n => (n instanceof Node))

provide('createMarker' ,() => Object.defineProperty(
  document.createTextNode('') ,'nodeName' ,{value: '#marker'}
))

provide('isMarker' ,n => (n.nodeName == '#marker'))

provide('getNext' ,n => n.nextSibling)
