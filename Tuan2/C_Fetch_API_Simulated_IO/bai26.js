function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function simulateFiveSecondWait() {
  console.log("Bắt đầu thực hiện tiến trình...");
  console.log("Đang chờ 5 giây, vui lòng đợi...");

  const startTime = Date.now();

  await wait(5000);

  const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`=> Đã hoàn thành sau ${elapsedTime} giây chờ đợi!`);
}

simulateFiveSecondWait();
