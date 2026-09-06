function asyncTask(id, durationMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`- Xong Tác vụ ${id} (mất ${durationMs}ms)`);
      resolve(`Dữ liệu từ task ${id}`);
    }, durationMs);
  });
}

async function runInParallel() {
  console.log("Bắt đầu thực hiện các tác vụ SONG SONG (Parallel) bằng Promise.all():");
  const startTime = Date.now();

  const [data1, data2, data3] = await Promise.all([
    asyncTask(1, 1000),
    asyncTask(2, 1000),
    asyncTask(3, 1000),
  ]);

  const totalTime = Date.now() - startTime;
  console.log("\nKết quả thu được:");
  console.log({ data1, data2, data3 });
  console.log(`=> Tổng thời gian chạy song song: ~${totalTime}ms (xấp xỉ 1000ms thay vì 3000ms như tuần tự)`);
}

runInParallel();
