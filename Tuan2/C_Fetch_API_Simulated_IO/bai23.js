async function fetchCompletedTodos() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  console.log(`Đang tải danh sách todos từ ${url}...`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const todos = await response.json();
    console.log(`Tổng số todos tải về: ${todos.length}`);

    const completedTodos = todos.filter((todo) => todo.completed === true);

    console.log(`Số lượng todos đã hoàn thành: ${completedTodos.length}`);
    console.log("\nTop 5 công việc đã hoàn thành đầu tiên:");
    console.table(completedTodos.slice(0, 5).map(t => ({ id: t.id, userId: t.userId, title: t.title, completed: t.completed })));

    return completedTodos;
  } catch (error) {
    console.error("Lỗi khi tải danh sách todos:", error.message);
  }
}

fetchCompletedTodos();
