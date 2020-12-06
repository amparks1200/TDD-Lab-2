//The application will translate the text to Pig Latin and displays it in a paragraph area below the text area

//Build Specs for Test:

describe("translate", function() {
    
    //Convert each word to a lowercase before translating
    it("convert to lowercase before translation", function() {
        expect(translate("APPLE")).toEqual("appleway");
    });
    //If the worst starts with a vowel, add "way" onto the ending
    it("If the worst starts with a vowel, add way onto the ending", function() {
       expect(translate("apple")).toEqual("appleway");
       expect(translate("eel")).toEqual("eelway");
    });
    //If a word starts with a consonant, mova all of the consonants that appear before the first vowel to the end of the word, then add "ay" to the end of the word
    it("If a word starts with a consonant, move all of the consonants that appear before the first vowel to the end of the word, then add ay to the end of the word", function() {
       expect(translate("link")).toEqual("inklay");
       expect(translate("ski")).toEqual("iskay");
       expect(translate("string")).toEqual("ingstray");
    });
});
/*
Notes
to split use word.split("") two quote and no space
use word.join("") to join the word back together
*/
