
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let deposits = [];
  for (let index = 0; index < array.length; index++) {
    if('deposits' in array[index]){
      let subtotal = 0; 
      for (let i = 0; i < array[index].deposits.length; i++) {
        subtotal+= array[index].deposits[i];
      }
      if(subtotal < 2000){
        deposits.push(array[index]);
      }
    } else {
      deposits.push(array[index]);
    }
  }
  return deposits; 
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
