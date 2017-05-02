function getMiddle(Word) {
    var length = Word.length,
        output, a = length / 2;

    if (length % 2 == 0) {
        output = Word.substring(a - 1, a + 1);
    } else {
        output = Word.charAt(a);
    }
    return output;
}
