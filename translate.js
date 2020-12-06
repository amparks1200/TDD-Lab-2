function translate(word) {
    let vowelEnd = "way"
    let consEnd = "ay"
    
    // lowercase this word
    word = word.toLowerCase();
    
    // array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    
    // vowel index set to 0
    let vowelIndex = 0;

    // if vowel is the first letter of word
    if (vowels.includes(word[0])) {
     return word + vowelEnd;
    // if the word starts with consonant 
    } else {
    for (let char of word) {
        if (vowels.includes(char)) {
            vowelIndex = word.indexOf(char);
            break;
        }
    }
    return word.slice(vowelIndex) + word.slice(0, vowelIndex) + consEnd;
    }
}
/*
(split on the word)
    const wordArray = word.split("");
    let first = wordArray[0];
*/

/*
do {
        wordArray.push(wordArray.shift());
        first = wordArray[0];
    } while (false);
        newWord = wordArray.join("") + consEnd;
    }
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
}
*/