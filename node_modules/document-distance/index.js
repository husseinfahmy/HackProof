'use strict';

module.exports = function (doc1, doc2) {
	if (typeof doc1 !== 'string' || typeof doc2 !== 'string') {
		throw new TypeError('Expected two strings as arguments');
	}

	doc1 = doc1.split("\n");
	doc2 = doc2.split("\n");

	var wordsDoc1 = getWordsFromLineList(doc1),
		wordsDoc2 = getWordsFromLineList(doc2);

	var freq1 = countFrequency(wordsDoc1),
		freq2 = countFrequency(wordsDoc2);

	return vectorAngle(freq1, freq2);
};

function getWordsFromLineList(line) {
	var wordList = [],
		wordsInLine;

	var i = 0, ii = line.length;
	var j = 0, jj;

	for(; i < ii; i++) {
		wordsInLine = getWordsFromString(line[i]);
		for(jj = wordsInLine.length; j < jj; j++) {
			wordList.push(wordsInLine[j]);
		}
	}

	return wordList;
}

function getWordsFromString(str) {
	str.toLowerCase();
	str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
	return str.split(" ");
}

function countFrequency(words) {
	var dictionary = {};

	var i = 1, len = words.length;

	dictionary[words[0]] = 1;

	while(i < len) {
		if(words[i] in dictionary) {
			dictionary[words[i]]++;
		} else {
			dictionary[words[i]] = 1;
		}
		i++;
	}

	var pairs = [];

	for(var word in dictionary) {
		if(dictionary.hasOwnProperty(word)) {
			pairs.push([word, dictionary[word]]);
		}
	}

	return pairs;
}

function innerProduct(L1, L2) {
	var sum = 0.0;

	var i = 0, j = 0;

	while(i < L1.length && j < L2.length) {
		if(L1[i][0] === L2[j][0]) {
			sum += L1[i][1] * L2[j][1];
			i++;
			j++;
		} else if(L1[i][0] < L2[j][0]) {
			i++;
		} else {
			j++;
		}
	}

	return sum;
}

function vectorAngle(L1, L2) {
	var numerator = innerProduct(L1, L2),
		denominator = Math.sqrt(innerProduct(L1, L1) * innerProduct(L2, L2));

	return Math.acos(numerator/denominator);
}
