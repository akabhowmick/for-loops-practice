
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongBalance = []
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0; 
    if('deposits' in array[i]){
      for (let j = 0; j < array[i].deposits.length; j++) {
        subtotal+= array[i].deposits[j];
      }
    } 
    if('withdrawals' in array[i]){
      for (let j = 0; j < array[i].withdrawals.length; j++) {
        subtotal-= array[i].withdrawals[j];
      }
    } 
    if(subtotal !== array[i].balance){
      wrongBalance.push(array[i]);
    }
  }
  return wrongBalance; 
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
