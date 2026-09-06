function createQueueTask(taskName, durationMs) {
  return async () => {
    console.log(`[Queue] Đang thực thi ${taskName}...`);
    await new Promise((resolve) => setTimeout(resolve, durationMs));
    console.log(`[Queue] ✓ Hoàn thành ${taskName} (sau ${durationMs}ms)`);
    return `${taskName} done`;
  };
}

async function queueProcess(tasksQueue) {
  console.log(`=== BẮT ĐẦU XỬ LÝ HÀNG ĐỢI GỒM ${tasksQueue.length} TÁC VỤ TUẦN TỰ ===\n`);
  const startTime = Date.now();
  const results = [];

  let taskIndex = 1;
  for (const taskFn of tasksQueue) {
    console.log(`--> Bắt đầu lượt xử lý #${taskIndex}:`);
    const result = await taskFn();
    results.push(result);
    taskIndex++;
  }

  const totalTime = Date.now() - startTime;
  console.log("\n=== TẤT CẢ TÁC VỤ TRONG HÀNG ĐỢI ĐÃ HOÀN TẤT ===");
  console.log(`Tổng thời gian thực thi tuần tự: ${totalTime}ms`);
  console.log("Danh sách kết quả:", results);
}

const taskQueue = [
  createQueueTask("Job 1: Xác thực người dùng", 600),
  createQueueTask("Job 2: Đọc dữ liệu từ DB", 800),
  createQueueTask("Job 3: Xử lý và chuyển đổi dữ liệu", 500),
  createQueueTask("Job 4: Gửi email thông báo", 700),
];

queueProcess(taskQueue);
