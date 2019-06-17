# dcx
Simple class name manager for DOM elements, inspired by
[classnames](https://github.com/JedWatson/classnames/) **200 bytes gzipped.**

> Why would you use this? Good question. Sometimes managing DOM state outside of
> a framework like React get's messy. Usually a good example is managing sticky
> header navigation styles based on template, scroll position, etc. This makes
> that easier :) It's also a great compliment to frameworkless utilities like
> [picoapp](https://github.com/estrattonbailey/picoapp).

## Install 
```bash
npm i dcx --save
```

# Usage
Bind an instance to a single DOM node:
```javascript
import dcx from 'dcx'

const cx = dcx(document.getElementById('root'))
```

Then, `dcx` implements essentially the same API as [classnames](https://github.com/JedWatson/classnames/):
```javascript
cx('foo', {
  'bar': true,
  'baz': false,
}, 'qux')

document.getElementById('root').className // foo bar qux
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
