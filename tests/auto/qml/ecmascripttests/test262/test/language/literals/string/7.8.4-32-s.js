// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.4-32-s
description: >
    Two OctalEscapeSequences in a String are not allowed in a String
    under Strict Mode
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
    eval('var x = "\\1\\1";');
});
