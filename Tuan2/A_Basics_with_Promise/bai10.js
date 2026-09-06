function demoPromise(shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Thực hiện tác vụ thành công!");
      } else {
        reject(new Error("Tác vụ thất bại do phát sinh lỗi!"));
      }
    }, 1000);
  });
}

console.log("--- TEST 1: Trường hợp Promise thành công ---");
demoPromise(true)
  .then((res) => console.log("Then:", res))
  .catch((err) => console.error("Catch:", err.message))
  .finally(() => {
    console.log("Done (Luôn chạy khi Promise kết thúc)");

    setTimeout(() => {
      console.log("\n--- TEST 2: Trường hợp Promise thất bại ---");
      demoPromise(false)
        .then((res) => console.log("Then:", res))
        .catch((err) => console.error("Catch:", err.message))
        .finally(() => {
          console.log("Done (Luôn chạy ngay cả khi có lỗi)");
        });
    }, 500);
  });
