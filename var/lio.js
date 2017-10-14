/* global module, require */

function hasSimilarChars (s) {
  for (var i in s)
    if (s[i - 1] === s[i] && i > 0) return true;

  return false;
}

function bruteForce (params) {
  var prefix = params.prefix || '';
  var filterSimilarChars = params.filterSimilarChars || false;
  var len = params.len;
  var chars = params.chars;
  var ints = params.ints;
  var step = params.step;
  var end = params.end;

  if (prefix.length <= len)
    if (step) step(prefix);

  if (prefix.length >= len)
    return [prefix];
//ints
  if (prefix.length <= ints)
    if (step) step(prefix);

  if (prefix.length >= ints)
    return [prefix];

  var strings = [prefix];

  for (var i in chars) {
    var nextString = prefix + chars[i];

    if (filterSimilarChars && hasSimilarChars(nextString))
      continue;

    var nextParams = {
      prefix: nextString,
      filterSimilarChars: filterSimilarChars,
      len: len,
      chars: chars,
	  ints: ints,
      step: step
    };

    strings = strings.concat(bruteForce(nextParams));
  }

  if (end) end(strings);

  return strings;
}

module.exports = bruteForce;