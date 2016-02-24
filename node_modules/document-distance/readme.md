# node-document-distance [![Build Status](https://travis-ci.org/vinimdocarmo/node-document-distance.svg?branch=master)](https://travis-ci.org/vinimdocarmo/node-document-distance)

## Document Distance Problem - *d(D1, D2)*

The document distance problem has applications in finding similar documents, detecting
duplicates (Wikipedia mirrors and Google) and plagiarism, and also in web search (D2 =
query). 

The idea is to define distance in terms of shared words.


## Install

```
$ npm install --save document-distance
```


## Usage

```js
var fs = require('fs');
var documentDistance = require('document-distance');

fs.readFile('file1.txt', function(err, dataFile1) {
	if(err) throw err;
	
	fs.readFile('file2.txt', function(err, dataFile2) {
		if(err) throw err;
		
		documentDistance(dataFile1.toString(), dataFile2.toString()); //=> 0.8410686705679303
	});
});


```


## API

### documentDistance(document1, document2)

#### document1

*Required*  
Type: `string`

#### document2

*Required*  
Type: `string`

## License

MIT © [Vinícius do Carmo](http://vinimdocarmo.js.org)
