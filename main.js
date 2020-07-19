'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});





// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.

// "yesTerday" => esterdayyay


// if word begins with consonant
// run through string until we find the first vowel
// identify index position, store and use
// store sound before vowel in a variable (bucket)

// splice out 'y' (first sound)
// concat/push 'y' (first sound) to end

//  concat 'ay' to the end 


const vowelArray = ['a', 'e', 'i', 'o', 'u']  

const pigLatin = (word) => {  
  let splitWord = word.trim().toLowerCase().split('')  
  for(let i = 0; i < splitWord.length; i++) {
    if (vowelArray.includes(splitWord[0])) {
      return word.concat("yay"); 
    } else {
      return findFirstVowel(splitWord);
    }    
  }


}
  
const findFirstVowel = (consonantWord) => {
  let poop = consonantWord.join()
  for(let i = 0; i < vowelArray.length; i++) {
    if (poop.includes(vowelArray[i])) {
      return poop.match(vowelArray[i]);

      // modifyWord()

    // }
    // else {

    // } 
    }    

  }
}










// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}


