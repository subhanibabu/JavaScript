function countWords(str) {
var wordCount;
wordCount = str.match(/\S+/g);
return wordCount ? wordCount.length : 0;
}
