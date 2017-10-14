"strict";

const fs = require('fs');
const querystring = require('querystring');
const path = require('path');
const should = require('should');
const bf = require('./var/lio.js');
const kf = require('./var/param.js');
const defini = require('./var/definition.js');
const stream = require('stream');
const log4js = require('log4js');

const repl = require('repl');
log4js.configure({
  appenders: { result: 
  {
	  type: 'file',
  filename: 'log/result.log' }
  },
  categories: {
	  default: { 
	  appenders: ['result'],
	  level: 'error' } 
	  }
});





var strParam, strParam2, strParam3;
var pattern1, text;
var ULTR_VALUE = 256;
var MAX_VALUE = 128;
var MID_VALUE = 64;
var MIN_VALUE = 32;
var i;



var strings = bf({
	
	step: function(force, path){
		  console.log('Repeating elements are: ' + path);
	
	},
	
  len: 20, 
filterSimilarChars: true,
  chars: "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    step: function (str,err, data, filename, body) {
		fs.readFile('./passwd/my.txt',(data, filename, err, body) => {
        if (err) {
    console.error(err);
  } else {
    console.log(body);
  }

});

 console.log('generatedID: ' + str); 
 
 
 return str;
 
  },
  end: function (strs, pattern) {
    strParam = strs;

    pattern1 = pattern;
    strs.should.eql(["abcdefghijklmnopqrstuvwxy34567890"]);

   // logger.error("Something went wrong:", strs);
    console.log();
	return -1;
  }
});

var strings2 = bf({
  len: 20,
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=~`[]{}|\:;'<>,.?/",
  filterSimilarChars: true,
  step: function (str) {
  console.log('generatedID: ' + str);
  },
  end: function (strs,pattern) {
    strParam2 = strs;

    strs.should.eql(['ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()']);
	

    console.log();
  }
});
var strings3 = kf({
  len: 100,
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=~`[]{}|\:;'<>,.?/",
  filterSimilarChars: true,
  step: function (str) {
    console.log('generated: ' + str);
  },
  end: function (strs,pattern) {
    strParam3 = strs;

    strs.should.eql([
	'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=~`[]{}|\:;<>,.?/,'
	]);
	

    console.log();
  }
});


strings.should.equal(strParam);
strings2.should.equal(strParam2);
strings3.should.equal(strParam3);

console.log('Keres test passed');