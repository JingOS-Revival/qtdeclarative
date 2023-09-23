// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Osmanya`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010480, 0x01049D],
    [0x0104A0, 0x0104A9]
  ]
});
testPropertyEscapes(
  /^\p{Script=Osmanya}+$/u,
  matchSymbols,
  "\\p{Script=Osmanya}"
);
testPropertyEscapes(
  /^\p{Script=Osma}+$/u,
  matchSymbols,
  "\\p{Script=Osma}"
);
testPropertyEscapes(
  /^\p{sc=Osmanya}+$/u,
  matchSymbols,
  "\\p{sc=Osmanya}"
);
testPropertyEscapes(
  /^\p{sc=Osma}+$/u,
  matchSymbols,
  "\\p{sc=Osma}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01047F],
    [0x01049E, 0x01049F],
    [0x0104AA, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Osmanya}+$/u,
  nonMatchSymbols,
  "\\P{Script=Osmanya}"
);
testPropertyEscapes(
  /^\P{Script=Osma}+$/u,
  nonMatchSymbols,
  "\\P{Script=Osma}"
);
testPropertyEscapes(
  /^\P{sc=Osmanya}+$/u,
  nonMatchSymbols,
  "\\P{sc=Osmanya}"
);
testPropertyEscapes(
  /^\P{sc=Osma}+$/u,
  nonMatchSymbols,
  "\\P{sc=Osma}"
);
