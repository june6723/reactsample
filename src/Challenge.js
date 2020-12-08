console.clear();
class ArrayUtilities {
  /* Your magic here */
  static addZeros = (numbers) => numbers.map((num) => num * 10);
  static moreThanFifty = (numbers) => numbers.filter((num) => num > 50);
  static removeFirst = (numbers) => numbers.filter((num, index) => index > 0);
  static sumAll = (numbers) => numbers.reduce((prev, curr) => prev + curr);
  static divide = (number) => {
    let str = number.toString();
    return str.split("");
  };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
