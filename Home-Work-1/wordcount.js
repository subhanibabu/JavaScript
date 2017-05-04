function countWords(str) {
    var wordCount = str.match(/\S+/g);
    return wordCount ? wordCount.length : 0;
}
