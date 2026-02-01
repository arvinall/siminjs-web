import { provide } from '@siminjs/render/env.js'

provide('createText' ,v => document.createTextNode(v ?? ''))
provide('updateText' ,(t ,v) => (t.data = v ?? ''))

provide('createElement' ,(t ,isSvg) => document.createElement(t))

provide('append' ,(dest ,...elms) => dest.append(...elms))
provide('replace' ,(dest ,...elms) => dest.replaceWith(...elms))
provide('remove' ,elm => elm.remove())
