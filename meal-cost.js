function mealCost(price, tipPercentage, taxPercentage) {
     const tip = price * (tipPercentage / 100);
     const tax = price * (taxPercentage / 100);
     const totalCost = price + tip + tax;
     return Math.round(totalCost);
}

console.log(mealCost(12, 20, 8));