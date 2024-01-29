function wordCounter(sentence) {
    const wordCountMap = new Map();

    // Break sentence from whitespace
    const words = sentence.split(/\s+/);

    for (let word of words) {
        const cleanWord = word.toLowerCase().replace(',', ' ');
        if (cleanWord.length > 0) {
            wordCountMap.set(cleanWord, (wordCountMap.get(cleanWord) || 0) + 1);
        }
    }

    return wordCountMap;
}

let sentence = "My name is Prakash and I am from Jodhpur Rajasthan, Jodhpur is also known as Bluecity"
let result = wordCounter(sentence);
console.log(result)