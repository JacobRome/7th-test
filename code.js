let array = [5, 4, 3, 2, 1, 0, -1]

let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)

// O(n^2)
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

  console.log(hasUniqueChars("Far"))
  console.log(hasUniqueChars("asdf"))
  console.log(hasUniqueChars("peeps"))

  // O(n) 



const string = 'the basketball player cand beat a football player in soccer!';
function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  function longer(champ, contender) {
    return (contender.length > champ.length) ? contender : champ;
}

function longestWord(str) {
    var words = str.split(' ');
    return words.reduce(longer);
}

console.log(longestWord("the basketball player cand beat a football player in soccer!"));