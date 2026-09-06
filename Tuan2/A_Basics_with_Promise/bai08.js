console.log("Khởi chạy chuỗi Promise bắt đầu với số 2:");

Promise.resolve(2)
  .then((num) => {
    const squared = num * num; // 2^2 = 4
    console.log(`Bước 1 - Bình phương số ${num}: ${squared}`);
    return squared;
  })
  .then((num) => {
    const doubled = num * 2; // 4 * 2 = 8
    console.log(`Bước 2 - Nhân đôi kết quả: ${doubled}`);
    return doubled;
  })
  .then((num) => {
    const added = num + 5; // 8 + 5 = 13
    console.log(`Bước 3 - Cộng thêm 5: ${added}`);
    return added;
  })
  .then((finalResult) => {
    console.log(`=> Kết quả cuối cùng nhận được: ${finalResult}`);
  })
  .catch((err) => {
    console.error("Lỗi trong chuỗi:", err);
  });
