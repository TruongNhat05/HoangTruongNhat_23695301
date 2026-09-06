function mockApiCall(endpoint, delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, data: `Dữ liệu từ ${endpoint}` });
    }, delayMs);
  });
}

async function fetchWithTimeout(apiPromise, timeoutMs = 2000) {
  let timeoutTimer;

  const timeoutPromise = new Promise((_, reject) => {
    timeoutTimer = setTimeout(() => {
      reject(new Error(`Timeout: Tác vụ gọi API vượt quá giới hạn cho phép ${timeoutMs}ms!`));
    }, timeoutMs);
  });

  try {
    const result = await Promise.race([apiPromise, timeoutPromise]);
    clearTimeout(timeoutTimer);
    return result;
  } catch (err) {
    clearTimeout(timeoutTimer);
    throw err;
  }
}

async function runDemo() {
  console.log("=== THỬ NGHIỆM 1: API phản hồi nhanh (1000ms < 2000ms timeout) ===");
  try {
    const res1 = await fetchWithTimeout(mockApiCall("/api/quick-data", 1000), 2000);
    console.log("Thành công:", res1);
  } catch (error) {
    console.error("Lỗi:", error.message);
  }

  console.log("\n=== THỬ NGHIỆM 2: API phản hồi chậm (3000ms > 2000ms timeout) ===");
  try {
    const res2 = await fetchWithTimeout(mockApiCall("/api/slow-data", 3000), 2000);
    console.log("Thành công:", res2);
  } catch (error) {
    console.error("Bắt được lỗi:", error.message);
  }
}

runDemo();
