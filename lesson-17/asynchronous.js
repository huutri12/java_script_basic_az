
// Bài toán đồng bộ là gì: Synchronous
console.log('Dòng 1 chạy đầu tiên')
console.log('Dòng 2 chạy sau dòng 1')
console.log('Dòng 3 chạy sau dòng 1 và dòng 2')

// Bài toán bất đồng bộ: đọc file dữ liệu và hiển thị dữ liệu của file ra ngoài. Trong thực tế sẽ cần phải tốn
// thời gian để hoàn thành tùy theo dung lượng file.

// khởi tạo biến để lưu trữ dữ liệu sau khi đọc file xong
let fileData = null
console.log('B1: Bắt đầu đọc file dữ liệu, dự kiến tốn mất 3s...')

// Bắt đầu đọc file dữ liệu
console.log('B2: Giả lập đang đọc file dữ liệu, thực thi hàm readileData...')

// Khởi tạo một hàm readFileData có nhiệm vụ đọc file, giả lập sẽ tốn 3 giây
const readFileData = () => {
    setTimeout(() => {
    console.log('B3: Đã đọc file dữ liệu xong, gán dữ liệu vào biến fileData!')
    fileData = ' Hữu Trí Dev'
    },3000)
}
// Thực thi hàm readFile
readFileData()

console.log('B4: Kết thúc quá trình đọc file dữ liệu thành công với data nhận được là: ', fileData)

