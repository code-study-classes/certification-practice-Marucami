function countUppercaseLetters(str) {
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    if (char >= 'A' && char <= 'Z') {
      count += 1;
    }
  }

  return count;
}

function combineStrings(N1, N2, S1, S2) {
  const firstPart = (N1 > 0) ? S1.slice(0, N1) : '';
  const secondPart = (N2 > 0) ? S2.slice(-N2) : '';
  return firstPart + secondPart;
}

function containsSubstring(S, S0) {
  return S.includes(S0);
}

function replaceSubstring(S, S1, S2) {
  const index = S.indexOf(S1);
  if (index !== -1) {
    return S.slice(0, index) + S2 + S.slice(index + S1.length);
  }
  return S;
}

function countWordsWithSameLetters(sentence) {
  const words = sentence.split(' ');
  const count = words.filter((word) => word.length >= 1
      && word[0].toLowerCase() === word[word.length - 1].toLowerCase()).length;
  return count;
}

function countWordsWithA(sentence) {
  const words = sentence.split(' ');
  const count = words.filter((word) => word.toLowerCase().includes('a')).length;
  return count;
}

function normalizeSpaces(sentence) {
  return sentence.replace(/\s+/g, ' ').trim();
}

function extractFileName(fullFileName) {
  const parts = fullFileName.split('/');
  const fileNameWithExtension = parts[parts.length - 1];
  const fileNameParts = fileNameWithExtension.split('.');
  const fileName = fileNameParts[0];
  return fileName;
}

function encryptSentence(sentence) {
  let evenChars = '';
  let oddChars = '';

  for (let i = 0; i < sentence.length; i += 1) {
    if (i % 2 === 0) {
      evenChars += sentence[i];
    } else {
      oddChars = sentence[i] + oddChars;
    }
  }
  const retr = evenChars + oddChars;
  return retr.split('').reverse().join('');
}

function checkBrackets() {

}

export {
  countUppercaseLetters, combineStrings, containsSubstring, replaceSubstring,
  countWordsWithSameLetters, countWordsWithA, normalizeSpaces,
  extractFileName, encryptSentence, checkBrackets,
};
