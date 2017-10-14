//# This is the charset definition file for Keresforce.
//# Each charset is defined in one line, with the characters of the charset enclosed by "[" and "]".

"strict";

function defini(force){
var i;
var size = force.length;

var charset = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
var numeric = ["0123456789"];
var alpha  = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var alphaNumeric      = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];
var  loweralpha   = ["abcdefghijklmnopqrstuvwxyz"];
var loweralphaNumeric = ["abcdefghijklmnopqrstuvwxyz0123456789"];
var mixalpha           = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var mixalphaNumeric   = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];

for (i = 0; i < size; i++) {
if (mixalpha.find(force[i])) {
document.writeln(force[i]);
}
else {
mixalpha.insert(force[i]);
}
}

for (i = 0; i < size; i++) {
if (mixalphaNumeric.find(force[i])) {
document.writeln(force[i]);
}
else {
mixalphaNumeric.insert(force[i]);
}
}

for (i = 0; i < size; i++) {
if (loweralpha.find(force[i])) {
document.writeln(force[i]);
}
else {
loweralpha.insert(force[i]);
}
}

for (i = 0; i < size; i++) {
if (loweralphaNumeric.find(force[i])) {
document.writeln(force[i]);
}
else {
loweralphaNumeric.insert(force[i]);
}
}

};
module.exports = defini;