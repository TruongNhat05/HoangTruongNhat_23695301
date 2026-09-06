function riskyAsyncOperation(isSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("Dữ liệu được tải thành công!");
      } else {
        reject(new Error("Lỗi kết nối cơ sở dữ liệu (Database Error)!"));
      }
    }, 1000);
  });
}

async function handleAsyncWithTryCatch() {
  console.log("--- Trường hợp 1: Tác vụ thành công ---");
  try {
    const data = await riskyAsyncOperation(true);
    console.log("Thành công:", data);
  } catch (error) {
    console.error("Bắt được lỗi:", error.message);
  }

  console.log("\n--- Trường hợp 2: Tác vụ phát sinh lỗi ---");
  try {
    const data = await riskyAsyncOperation(false);
    console.log("Thành công:", data);
  } catch (error) {
    console.error("Bắt được lỗi bằng catch:", error.message);
  } finally {
    console.log("Khối finally luôn chạy sau khi hoàn thành try/catch!");
  }
}

handleAsyncWithTryCatch();
