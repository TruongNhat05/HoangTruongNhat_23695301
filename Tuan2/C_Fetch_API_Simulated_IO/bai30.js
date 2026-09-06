async function fetchEndpoint(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} - ${response.statusText}`);
  }
  return await response.json();
}

async function handleMultipleApiCallsWithAllSettled() {
  console.log("=== THỰC THI NHIỀU API CALL VỚI PROMISE.ALLSETTLED() ===\n");

  const endpoints = [
    { name: "API 1 (Hợp lệ)", url: "https://jsonplaceholder.typicode.com/todos/1" },
    { name: "API 2 (Hợp lệ)", url: "https://jsonplaceholder.typicode.com/todos/2" },
    { name: "API 3 (Lỗi 404 Not Found)", url: "https://jsonplaceholder.typicode.com/invalid-endpoint-404" },
    { name: "API 4 (Hợp lệ)", url: "https://jsonplaceholder.typicode.com/users/1" },
    { name: "API 5 (Lỗi Sai Tên Miền)", url: "https://nonexistent-domain-test-xyz.org/data" },
  ];

  const promises = endpoints.map((ep) => fetchEndpoint(ep.url));

  const results = await Promise.allSettled(promises);

  console.log("------------------ KẾT QUẢ TỔNG HỢP ------------------");
  results.forEach((result, index) => {
    const ep = endpoints[index];
    if (result.status === "fulfilled") {
      console.log(`✓ [THÀNH CÔNG] [${ep.name}]`);
      console.log(`  Dữ liệu nhận được:`, JSON.stringify(result.value).slice(0, 70) + "...");
    } else {
      console.log(`✗ [THẤT BẠI] [${ep.name}]`);
      console.log(`  Nguyên nhân: ${result.reason.message}`);
    }
    console.log();
  });
}

handleMultipleApiCallsWithAllSettled();
