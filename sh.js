function makeAccount(initial) {
    let balance = initial
    function withdraw(amount){
        if (balance - amount >= 0) {
            balance = balance - amount
            return "Here's your money: $" + amount
        }
        return "Insufficient funds."
    }
    return withdraw
}
const account = makeAccount(100);
console.log(account(50)); // Here's your money: $50
console.log(account(60)); // Insufficient funds.

function makeCounter(start) {
  let count = start;
  function counter() {
    count++
    return count
  }
  return counter
}
const counter = makeCounter(0);
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const a = makeCounter(10);
const b = makeCounter(0);
console.log(a()); // 11
console.log(a()); // 12
console.log(b()); // 1
console.log(a()); // 13
console.log(b()); // 2

function makeSmartCounter(start) {
  let count = start;

  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }

  function value() {
    return count;
  }

  function reset() {
    count = start;
    return count;
  }
  return {
    increment,
    decrement,
    value,
    reset
  }
}
const c = makeSmartCounter(5);
console.log(c.increment()); // 6
console.log(c.increment()); // 7
console.log(c.decrement()); // 6
console.log(c.value());     // 6
console.log(c.reset());     // 5