function printNumbers(num1, num2) {
  if (num1 < num2) {
    const intervalId = setInterval(function () {
      console.log(num1)
      if (num1 >= num2) {
        clearInterval(intervalId);
      }
      num1++
    }, 1000)
  } else if (num1 > num2) {
    const intervalId = setInterval(function() {
      console.log(num1)
      if (num1 <= num2) {
        clearInterval(intervalId)
      }
      num1--
    }, 1000)
  } else {
    console.log(`Ошибка! Нечего прибавлять и убавлять, первое введённое число - ${num1} и второе введённое число - ${num2}, они равны между собой.`)
  }
}
printNumbers(9, 12);

// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить
// числа в интервале от первого до второго принятого числа. Используйте setInterval.
// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься
// число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).