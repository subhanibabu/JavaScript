function getMiddle(Word) {
    var length = Word.length,
        output, midLength = length / 2;
    if (length % 2 == 0) {
        output = Word.substring(midLength - 1, midLength + 1);
    } else {
        output = Word.charAt(midLength);
    }
    return output;
}
