async function fetchWithRetry(url, retries = 3, delayMs = 1000) {
  let attempt = 0;

  while (attempt < retries) {
    attempt++;
    try {
      console.log(`[Thử lần ${attempt}/${retries}] Đang gửi request tới: ${url}`);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error status: ${response.status}`);
      }

      const data = await response.json();
      console.log(`=> Thành công ở lần thử thứ ${attempt}!`);
      return data;
    } catch (error) {
      console.warn(`[Cảnh báo] Lần ${attempt} thất bại: ${error.message}`);

      if (attempt >= retries) {
        throw new Error(`Đã thử lại tối đa ${retries} lần nhưng vẫn thất bại: ${error.message}`);
      }

      console.log(`Đợi ${delayMs}ms trước khi thử lại...`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
}

async function runDemo() {
  console.log("=== THỬ NGHIỆM 1: Gọi URL thành công ===");
  try {
    const successData = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
    console.log("Dữ liệu nhận được:", successData);
  } catch (err) {
    console.error("Lỗi:", err.message);
  }

  console.log("\n=== THỬ NGHIỆM 2: Gọi URL lỗi để kiểm tra cơ chế Retry ===");
  try {

    await fetchWithRetry("https://invalid-domain-demo-test-12345.com/api", 3, 500);
  } catch (err) {
    console.error("Kết quả cuối cùng:", err.message);
  }
}

runDemo();
