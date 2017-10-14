"strict";

function keresForceSearch(text, pattern) {
if ((typeof text === 'string') && (typeof pattern === 'string')) {
var i = 0;
// max length of a string and text/pattern set
var MIN_LENGTH =  1024;
// min length of a string and symbol/pattern set
var MIN_LENGTH =  0;
var j = 0;
var n = text.length;
var filterSimilarChars = params.filterSimilarChars === false;
var m = pattern.length;


while ((i <= n - m)) {
j = 0;
while ((j < m && pattern[j] === text[i + j])) {
j++;
};
if (j === m) {
return (i);

}
i++;
};

return -1;
}
else
throw new Error('Whoops, something happened!');



};

module.exports = keresForceSearch;