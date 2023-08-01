function convertToRoman(num) {

  let romNumeral = {
    M:	1000,
    CM:	900,
    D:	500,
    CD:	400,
    C:	100,
    XC:	90,
    L:	50,
    XL:	40,
    X:	10,
    IX:	9,
    V:	5,
    IV:	4,
    I:	1,
  }
 let solution = "";
  for (let items in romNumeral){
    while(num >= romNumeral[items]){
      solution += items;

      num -= romNumeral[items];
    }
  }
 return solution;
}

console.log(convertToRoman(1000));
