function rejectWithError() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 1000);
  });
}

console.log("Bắt đầu gọi rejectWithError()...");

rejectWithError()
  .then((data) => {
    console.log("Thành công:", data);
  })
  .catch((error) => {
    console.error("Bắt được lỗi:", error.message);
  });
