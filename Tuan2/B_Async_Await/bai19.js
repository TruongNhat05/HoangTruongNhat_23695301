async function fetchUser(id) {

  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    id: id,
    name: `User_${id}`,
    email: `user${id}@example.com`,
  };
}

async function fetchUsers(ids) {
  console.log(`Đang tải dữ liệu cho các ID: [${ids.join(", ")}] song song...`);

  const users = await Promise.all(ids.map((id) => fetchUser(id)));
  return users;
}

async function main() {
  const userIds = [1, 2, 5, 8, 10];
  const startTime = Date.now();

  const usersList = await fetchUsers(userIds);

  console.log(`\nĐã lấy thành công ${usersList.length} users trong ~${Date.now() - startTime}ms:`);
  console.table(usersList);
}

main();
