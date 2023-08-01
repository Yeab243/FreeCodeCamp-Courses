function checkCashRegister(price, cash, cid) {
  const currencyUnitValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
  };

  let change = cash - price;
  let changeDue = [];
  let totalCashInDrawer = 0;

  for (let i = 0; i < cid.length; i++) {
    totalCashInDrawer += cid[i][1];
  }

  function round(value) {
    return Math.round(value * 100) / 100;
  }

  if (change > totalCashInDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change === totalCashInDrawer) {
    return { status: "CLOSED", change: cid };
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      const unit = cid[i][0];
      const unitValue = currencyUnitValues[unit];
      let unitAvailable = cid[i][1]; 
      let unitsToReturn = 0;

      while (change >= unitValue && unitAvailable > 0) {
        change = round(change - unitValue);
        unitAvailable = round(unitAvailable - unitValue);
        unitsToReturn++;
      }

      if (unitsToReturn > 0) {
        changeDue.push([unit, unitsToReturn * unitValue]);
      }
    }
  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    return { status: "OPEN", change: changeDue };
  }
}

const result = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

console.log(result);
