# jquery.commonparent.js
jQuery plugin for finding a common parent element from a set of elements

Requires **jQuery** - tested on 3.3.1

Tested through **Chrome 72**

Originally designed to be used in a Chrome extension content script. If you find issues in other browsers, please submit an issue [here](https://github.com/DKCTC/jquery.commonparent.js/issues).

## Usage:

**Return the parent element that is closest to the elements in the collection:**

```javascript
$('.element-class').commonParent();
```

**Return all of the parents going all the way up the DOM tree:**

```javascript
$('.element-class').commonParents();
```

**Exclude the matched elements from the return result in case one of the elements in the collection is the parent of the rest (return the parent of that element instead of that element itself):**

```javascript
$('.element-class').commonParent(true);
$('.element-class').commonParents(true);
```

## Support

Please submit an issue.


## License

Copyright (c) 2021 DKCTC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
