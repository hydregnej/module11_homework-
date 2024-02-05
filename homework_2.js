function defineNumber(number) {
  let isNumber = +number

  if (isNumber <= 0 || isNaN(isNumber) || isNumber > 1000) {
    console.log(`Данные не верны`)
    return
  }

  if(isNumber === 1) {
    console.log(`Число ${isNumber} не простое`)
    return
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(isNumber); i++) {
    if (isNumber % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`Число - ${isNumber} является простым`)
  } else {
    console.log(`Число - ${isNumber} не является простым`)
    return
  }
}

let inputUserNumber = 3

defineNumber(inputUserNumber)

// Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, 
// является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, то выводится сообщение, 
// что данные неверны. Обратите внимание на числа 0 и 1.



