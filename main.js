
//created elements
let translationText = document.createElement("H2")
translationText.innerText = ("Pig Latin Translator")
let translateButton = document.createElement("BUTTON")
let textInput = document.createElement("INPUT")
document.body.appendChild(translationText)
document.body.appendChild(textInput)
document.body.appendChild(translateButton)
translateButton.innerText = "Translate"
// inject h2 with pigLatin result
const displayPigLatin = (translatedWord => translationText.innerHTML = translatedWord)
//run pigLatin
const pigLatin = () => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let finalWord = "";
  let cleanWord = textInput.value.toLowerCase().trim();  
  if (vowels.indexOf(cleanWord[0]) > -1) {
    finalWord = cleanWord + "yay";
    return displayPigLatin(finalWord);
  } else {
    let firstMatch = cleanWord.match(/[aeiou]/g) || 0;
    let vowelIndex = cleanWord.indexOf(firstMatch[0]);
    finalWord = cleanWord.slice(vowelIndex) + cleanWord.slice(0, vowelIndex) + "ay";
    return displayPigLatin(finalWord);    
  }
}
//invoke with click
translateButton.addEventListener('click', pigLatin)