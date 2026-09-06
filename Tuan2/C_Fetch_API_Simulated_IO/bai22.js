async function fetchMultipleTodos() {
  const ids = [1, 2, 3];
  console.log(`Đang gọi API nhiều lần cho các todo id: ${ids.join(", ")}...`);

  try {

    const requests = ids.map((id) =>
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
        if (!res.ok) throw new Error(`Lỗi HTTP ${res.status}`);
        return res.json();
      })
    );

    const results = await Promise.all(requests);

    console.log("\nKết quả nhận được từ các lần gọi API:");
    results.forEach((todo, index) => {
      console.log(`\n[Lần gọi ${index + 1} - Todo #${todo.id}]`);
      console.log(`- Title: ${todo.title}`);
      console.log(`- Completed: ${todo.completed}`);
    });
  } catch (error) {
    console.error("Lỗi trong quá trình gọi API:", error.message);
  }
}

fetchMultipleTodos();
