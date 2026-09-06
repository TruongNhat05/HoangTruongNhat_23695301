async function getTodo() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  console.log(`Đang gửi request GET tới ${url}...`);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Dữ liệu nhận được từ API:");
    console.log(data);
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu:", error.message);
  }
}

getTodo();
