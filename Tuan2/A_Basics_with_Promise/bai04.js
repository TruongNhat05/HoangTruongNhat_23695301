function getRandomNumberPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    console.log(`Số ngẫu nhiên sinh ra: ${randomNumber}`);

    if (randomNumber >= 0.3) {
      resolve(randomNumber);
    } else {
      reject(new Error(`Số ${randomNumber} quá nhỏ (nhỏ hơn 0.3)!`));
    }
  });
}

console.log("Xử lý Promise bằng .then() và .catch():");

getRandomNumberPromise()
  .then((num) => {
    console.log(`[Thành công - .then()] Giá trị nhận được: ${num}`);
  })
  .catch((err) => {
    console.error(`[Thất bại - .catch()] Gặp lỗi: ${err.message}`);
  });
