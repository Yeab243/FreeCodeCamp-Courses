function rot13(str) {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let final = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index;

    if (/[A-Z]/.test(char)) {
      index = (letters.indexOf(char) + 13) % 26;
      final += letters[index];
    } else if (/[a-z]/.test(char)) {
      index = (letters.indexOf(char.toUpperCase()) + 13) % 26;
      final += letters[index].toLowerCase();
    } else {
      final += char;
    }
  }

  return final;
}

console.log(rot13("SERR PBQR PNZC"));
