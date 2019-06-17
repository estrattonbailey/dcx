import test from 'ava'
import { dcx } from './dist/dcx.js'
import { JSDOM } from 'jsdom'

const dom = new JSDOM(`<body>
  <div></div>
</body>`)

test('base', t => {
  const node = dom.window.document.children[0]
  const cx = dcx(node)

  cx('foo', { bar: true, baz: false }, 'qux')

  t.true('foo bar qux' === node.className)
})
