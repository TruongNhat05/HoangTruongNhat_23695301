function createTask(taskId, executionTimeMs) {
  return new Promise((resolve) => {
    console.log(`- Bắt đầu thực thi Task #${taskId}...`);
    setTimeout(() => {
      console.log(`  ✓ Task #${taskId} hoàn thành sau ${executionTimeMs}ms`);
      resolve({
        id: taskId,
        status: "success",
        processedAt: new Date().toLocaleTimeString(),
      });
    }, executionTimeMs);
  });
}

async function batchProcess() {
  console.log("=== BẮT ĐẦU XỬ LÝ LÔ (BATCH PROCESS) 5 TÁC VỤ CÙNG LÚC ===");
  const startTime = Date.now();

  const taskBatch = [
    createTask(1, 1200),
    createTask(2, 800),
    createTask(3, 1500),
    createTask(4, 600),
    createTask(5, 1000),
  ];

  const results = await Promise.all(taskBatch);

  const totalTime = Date.now() - startTime;
  console.log("\n=== KẾT QUẢ XỬ LÝ LÔ ===");
  console.log(`Tất cả 5 tác vụ đã hoàn tất trong tổng thời gian: ${totalTime}ms (thời gian tương đương task lâu nhất: ~1500ms)`);
  console.table(results);
}

batchProcess();
