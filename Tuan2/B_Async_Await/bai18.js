export async function fetchUser(id) {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id: id,
    name: `Nguyễn Văn User_${id}`,
    email: `user${id}@example.com`,
    role: id === 1 ? "Admin" : "Member",
    createdAt: new Date().toISOString(),
  };
}

async function main() {
  console.log("Đang gọi fetchUser(101) (giả lập API mất 1 giây)...");
  const user = await fetchUser(101);
  console.log("Dữ liệu User nhận được:", user);
}

main();
