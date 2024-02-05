function getSum(firstNumber) {

  return function(secondNumber) {
    return firstNumber + secondNumber
  }
  
}

const firstReceivedNumber = 51
const secondReceivedNumber = 49

const setFirstNumber = getSum(firstReceivedNumber)
const result = setFirstNumber(secondReceivedNumber)

console.log(result)

// Напишите функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
// Выведите в консоль результат.