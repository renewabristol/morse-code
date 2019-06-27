const morseEquivalents = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----"
};

const translateToMorse = () => {
  translation = "";
  englishInput = document.getElementById("englishInput");
  englishInput = event.target.value;
  morseOutput = document.getElementById("morseOutput");
  englishInput = englishInput.toUpperCase();

  // loop over each character in the input
  for (i = 0; i < englishInput.length; i++) {
    translation += englishInput[i];
    console.log("translation: " + translation);
    console.log("morseEquivalent: " + morseEquivalents[englishInput[i]]);
  }
  // makes the translation appear in the output box
  morseOutput.value = translation;
};
