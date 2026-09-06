# Bài Tập Lập Trình Bất Đồng Bộ Trong JavaScript (Tuần 2)

Dự án chứa lời giải chi tiết cho 30 bài tập về lập trình bất đồng bộ trong JavaScript, bao gồm **Promise**, **Async/Await**, **Fetch API & Simulated I/O**.

---

## 📁 Cấu trúc thư mục

```text
Tuan2/
├── .gitignore
├── package.json
├── README.md
│
├── A_Basics_with_Promise/             # Phần A: Kiến thức cơ bản về Promise
│   ├── bai01.js   # Bài 1: Tạo Promise trả về "Hello Async" sau 2 giây
│   ├── bai02.js   # Bài 2: Hàm trả về Promise resolve số 10 sau 1 giây
│   ├── bai03.js   # Bài 3: Hàm reject Promise với lỗi "Something went wrong" sau 1 giây
│   ├── bai04.js   # Bài 4: Xử lý Promise trả về số ngẫu nhiên bằng .then() và .catch()
│   ├── bai05.js   # Bài 5: simulateTask(time) resolve "Task done" sau time ms
│   ├── bai06.js   # Bài 6: Chạy 3 Promise song song bằng Promise.all() và in kết quả
│   ├── bai07.js   # Bài 7: Dùng Promise.race() lấy kết quả Promise về đích trước
│   ├── bai08.js   # Bài 8: Promise chain: bình phương 2 -> nhân đôi -> cộng 5
│   ├── bai09.js   # Bài 9: Đọc mảng sau 1 giây và lọc ra các số chẵn
│   └── bai10.js   # Bài 10: Dùng .finally() để log "Done" khi Promise kết thúc
│
├── B_Async_Await/                     # Phần B: Cú pháp Async/Await
│   ├── bai11.js   # Bài 11: Chuyển đổi Bài 1 sang async/await
│   ├── bai12.js   # Bài 12: Hàm async gọi simulateTask(2000) và log kết quả
│   ├── bai13.js   # Bài 13: Xử lý lỗi bằng try/catch với async/await
│   ├── bai14.js   # Bài 14: Hàm async nhận số, chờ 1 giây, trả về số × 3
│   ├── bai15.js   # Bài 15: Gọi nhiều hàm async tuần tự bằng await
│   ├── bai16.js   # Bài 16: Gọi nhiều hàm async song song bằng Promise.all()
│   ├── bai17.js   # Bài 17: Dùng cú pháp for await...of duyệt mảng Promise
│   ├── bai18.js   # Bài 18: fetchUser(id) giả lập API trả về user sau 1 giây
│   ├── bai19.js   # Bài 19: fetchUsers(ids) gọi fetchUser cho từng ID
│   └── bai20.js   # Bài 20: Thiết lập timeout: API mất quá 2 giây sẽ throw error
│
└── C_Fetch_API_Simulated_IO/          # Phần C: Fetch API & Mô phỏng I/O
    ├── bai21.js   # Bài 21: Dùng fetch lấy dữ liệu từ public API (JSONPlaceholder)
    ├── bai22.js   # Bài 22: Gọi API nhiều lần và in kết quả
    ├── bai23.js   # Bài 23: Lấy danh sách todos và lọc ra công việc đã hoàn thành
    ├── bai24.js   # Bài 24: postData() gửi POST request đến test API
    ├── bai25.js   # Bài 25: downloadFile mô phỏng tải file trong 3 giây
    ├── bai26.js   # Bài 26: Dùng async/await + setTimeout mô phỏng chờ 5 giây
    ├── bai27.js   # Bài 27: fetchWithRetry(url, retries) tự thử lại khi API thất bại
    ├── bai28.js   # Bài 28: batchProcess() xử lý 5 tác vụ bất đồng bộ cùng lúc
    ├── bai29.js   # Bài 29: queueProcess() xử lý tác vụ tuần tự theo hàng đợi (queue)
    └── bai30.js   # Bài 30: async/await + Promise.allSettled() tổng hợp trạng thái API
```

---

## 🚀 Hướng dẫn chạy chương trình

Yêu cầu môi trường: **Node.js >= v18** (đã tích hợp sẵn Fetch API).

Chạy trực tiếp từng bài bằng lệnh `node`:

### Phần A: Basics with Promise
```bash
node A_Basics_with_Promise/bai01.js
node A_Basics_with_Promise/bai02.js
node A_Basics_with_Promise/bai03.js
node A_Basics_with_Promise/bai04.js
node A_Basics_with_Promise/bai05.js
node A_Basics_with_Promise/bai06.js
node A_Basics_with_Promise/bai07.js
node A_Basics_with_Promise/bai08.js
node A_Basics_with_Promise/bai09.js
node A_Basics_with_Promise/bai10.js
```

### Phần B: Async/Await
```bash
node B_Async_Await/bai11.js
node B_Async_Await/bai12.js
node B_Async_Await/bai13.js
node B_Async_Await/bai14.js
node B_Async_Await/bai15.js
node B_Async_Await/bai16.js
node B_Async_Await/bai17.js
node B_Async_Await/bai18.js
node B_Async_Await/bai19.js
node B_Async_Await/bai20.js
```

### Phần C: Fetch API & Simulated I/O
```bash
node C_Fetch_API_Simulated_IO/bai21.js
node C_Fetch_API_Simulated_IO/bai22.js
node C_Fetch_API_Simulated_IO/bai23.js
node C_Fetch_API_Simulated_IO/bai24.js
node C_Fetch_API_Simulated_IO/bai25.js
node C_Fetch_API_Simulated_IO/bai26.js
node C_Fetch_API_Simulated_IO/bai27.js
node C_Fetch_API_Simulated_IO/bai28.js
node C_Fetch_API_Simulated_IO/bai29.js
node C_Fetch_API_Simulated_IO/bai30.js
```

---

## 📦 Hướng dẫn đẩy lên Git (GitHub / GitLab)

Dự án đã được khởi tạo sẵn Git repository cục bộ (`git init`). Bạn chỉ cần liên kết với remote repository và đẩy lên theo các bước sau:

1. Tạo repository mới trên GitHub / GitLab (ví dụ: `Tuan2-Async-JS`).
2. Mở terminal tại thư mục này và chạy các lệnh:

```bash
# Đổi tên nhánh mặc định thành main (nếu cần)
git branch -M main

# Thêm URL remote của bạn (thay bằng URL repo của bạn)
git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git

# Đẩy mã nguồn lên Git
git push -u origin main
```
