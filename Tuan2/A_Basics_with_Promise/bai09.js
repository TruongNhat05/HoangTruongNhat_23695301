const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 23, 24];

function getEvenNumbersAfterOneSecond(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = arr.filter((num) => num % 2 === 0);
      resolve(evenNumbers);
    }, 1000);
  });
}

console.log("Mảng ban đầu:", inputNumbers);
console.log("Đang đọc mảng và lọc số chẵn sau 1 giây...");

getEvenNumbersAfterOneSecond(inputNumbers).then((result) => {
  console.log("Danh sách các số chẵn đã được lọc:", result);
});
