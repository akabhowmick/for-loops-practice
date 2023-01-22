// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  let withdrawals = [];
  for (let index = 0; index < array.length; index++) {
    if('withdrawals' in array[index]){
      let subtotal = 0; 
      for (let i = 0; i < array[index].withdrawals.length; i++) {
        subtotal+= array[index].withdrawals[i];
      }
      withdrawals.push(subtotal);
    } else {
      withdrawals.push(0);
    }
  }
  return withdrawals; 

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
