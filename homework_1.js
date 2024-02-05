function CheckingOddOrEven(value) {
  let oddElem = 0
  let evenElem = 0
  let zeroElem = 0

  for (const elem of value) {
    if (typeof elem === 'number' && !isNaN(elem)) {
      if (elem === 0) {
        zeroElem++
      } else if (elem % 2 === 0) {
        evenElem++
      } else  {
        oddElem++
      }
    } 
  }
  console.log(`Количество чётных элементов - ${evenElem}, количество нечётных элементов - ${oddElem}, количество нулевых элементов - ${zeroElem}`)
}

let arr = [1, 2, 6, 0, 0, null, undefined, 'text', 0, 3]
CheckingOddOrEven(arr)

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
//  Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, 
// но и знаки, например null и так далее.