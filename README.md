relative-to-date
=================

Converts relative time strings (like "2 years ago" or "10 months from now") to javascript date objects.

This module was conceived to pass date options to libraries, such as "ageLimit: '18 year ago'" or "maxExpireDate: '10 year from now'", so only works with english strings and it's not in my plans to make it work with other languages. However, feel free to code it and make a pull request if you need it.  

Valid values are:
```
(0-9)+ (year|month|day|hour|minute|second)s? (ago|from now)
```

and
```now``` which it's a wildcard equivalent to ```new Date()```

Notice that only works when it's a unmistakable value and it's actually possible to revert it. For example, "about a month ago" or "less than a minute ago" are impossible values to be reverted to an accurate date.

Install
-------

```
npm install relative-to-date --save
```


How to Use it
----------

```javascript
const relativeToDate = require('relative-to-date');

const now = relativeToDate('now'); // Date 2016-04-09T01:39:34.843Z
const fourHoursAgo = relativeToDate('4 hours ago'); // Date 2016-04-08T21:39:34.010Z
const tenYearsAgo = relativeToDate('10 years ago'); // Date 2006-04-09T01:39:34.843Z
const oneMonthInTheFuture = relativeToDate('1 month from now'); // Date 2016-05-09T01:39:34.843Z
const oneYearAgo = relativeToDate('1 year ago'); // Date 2015-04-09T01:39:34.843Z
const oneYearAgo2 = relativeToDate('12 months ago'); // Date 2015-04-09T01:39:34.843Z

```

Contributing
--------
If you have any suggestion or improvement, feel free to make a pull request with your changes or contact me on twitter ([@neiker](http://twitter.com/neiker)) if you have a great idea but you are too lazy to code it.

License
-------

The MIT License (MIT)

Copyright (c) 2014 Javier Alejandro Alvarez <neiker@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
