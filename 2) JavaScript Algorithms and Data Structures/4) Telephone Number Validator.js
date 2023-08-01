function telephoneCheck(str) {
  let rx = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm
  return rx.test(str);
}

console.log(telephoneCheck("555-555-5555"));
