function downloadFile(filename) {
  console.log(`Bắt đầu tải file: "${filename}"...`);
  const startTime = Date.now();

  return new Promise((resolve) => {
    setTimeout(() => {
      const duration = (Date.now() - startTime) / 1000;
      console.log(`=> Tải file "${filename}" hoàn tất sau ${duration.toFixed(1)} giây!`);
      resolve({ filename, size: "15.4 MB", status: "downloaded" });
    }, 3000);
  });
}

downloadFile("document_tuan2.pdf").then((result) => {
  console.log("Chi tiết file đã tải:", result);
});
