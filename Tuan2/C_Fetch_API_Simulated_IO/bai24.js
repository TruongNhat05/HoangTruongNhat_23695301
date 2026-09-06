async function postData() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const newPost = {
    title: "Học lập trình bất đồng bộ với JavaScript",
    body: "Nội dung bài viết về Promise, Async/Await và Fetch API.",
    userId: 1,
  };

  console.log(`Đang gửi POST request tới: ${url}`);
  console.log("Dữ liệu gửi đi:", newPost);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const createdData = await response.json();

    console.log(`\nPhản hồi từ Server (HTTP status: ${response.status}):`);
    console.log("Dữ liệu đã tạo thành công:", createdData);
    return createdData;
  } catch (error) {
    console.error("Lỗi khi gửi POST request:", error.message);
  }
}

postData();
