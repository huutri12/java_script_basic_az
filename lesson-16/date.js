/**
 * JavaScript cung cấp cho chúng ta một đối tượng Build-in ( tích hợp sẵn ) là Date để làm việc với ngày tháng và thời gian.
 * Đối tượng Date này có thể thao tác rất nhiều với thời gian, ví dụ: tạo, định dạng ngày tháng, thực hiện các phép toán
 với thời gian... vv
 */

// Học phần 1: Có khá nhiều cách để khởi tạo một đối tượng Date trong JavaScript với những sự khác nhau như sau:
// Cách 1 . Không có tham số: Tạo đối tượng Date với ngày và thời gian tại thời điểm hiện tại.
const now = new Date()
console.log(typeof now);
console.log('now Object: ', now);
console.log('now String: ', now.toLocaleString());

console.log('-----------------------------------')

// Cách 2. VỚi chuỗi ngày tháng(ISO hoặc các định dạng khác):
 const specificDate = new Date("2024-11-07 17:17:00")
 console.log('specificDate: ', specificDate.toLocaleString());

console.log('-----------------------------------')

//cách 3. Với năm , tháng, ngày, giờ, phút, giây
const customDate = new Date(2024, 10, 7, 17, 17, 0) // lưu ý : 12 tháng sẽ chạy theo số từ 0-11
console.log('customDate: ', customDate.toLocaleString());

console.log('-----------------------------------')

//cách 4. Dùng dấu thời gian(timestamp): số mili-giây kể từ ngày 1/1/1970 00:00:00 UTC
const timestampDate = new Date(1734673319)
console.log('timestampDate: ', timestampDate.toLocaleString());

//---------------------------------------------------------------------------
// Học phần 2: Cách lấy từng phần dữ liệu cụ thể từ một đối tượng Date:
const currentDate = new Date();
console.log(currentDate.getFullYear()) // Lấy năm
console.log(currentDate.getMonth()) // Lấy tháng ( 0- 11 )
console.log(currentDate.getDate()) // Lấy ngày ( 1 - 31 )

console.log(currentDate.getHours()) // Lấy giờ ( 0 - 23 )
console.log(currentDate.getMinutes()) // Lấy phút ( 0 - 59 )
console.log(currentDate.getSeconds()) // Lấy giây ( 0 - 59 )

console.log(currentDate.getDay()) // Lấy ngày trong tuần
console.log('Before update currentDate: ', currentDate.toLocaleString())

//------------------------------------------------------------------
// Học phần 3: Cập nhật lại các thành phần của đối tượng Date
currentDate.setFullYear(2025)
currentDate.setMonth(6) //tháng 7
currentDate.setDate(15)

currentDate.setHours(20)
currentDate.setMinutes(30)
currentDate.setSeconds(45)
console.log('After update currentDate: ', currentDate.toLocaleString())

//------------------------------------------------------------------
// Học phần 4: Tính toán ngày tháng với Date

//ví dụ1: Tính toán khoảng cách giữa hai ngày
const startDate = new Date("2024-11-01")
const endDate = new Date("2024-11-06")
console.log(endDate - startDate)
const diffDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))
console.log('diffDays: ',diffDays)

//ví dụ2: Thêm hoặc bớt khoảng thời gian 
const date = new Date(); // lấy ngày hiện tại
date.setDate(date.getDate() + 5)
console.log('date : ',date.toLocaleString())

//------------------------------------------------------------------
// Học phần 4: Định dạng dữ liệu với Object Date thành chuỗi String
const formatDate = new Date()
// to ISOString(): Chuỗi định dạng ISO (định dạng này phổ biến khi làm việc vowisAPI back-end)
console.log('to ISOString(): ',formatDate.toISOString())

// toLocalDateString() và toLocalTimeString(): Định dạng riêng ngày tháng hoặc thời gian theo ngôn ngữ người dùng
console.log('toLocalDateString():', formatDate.toLocaleDateString())
console.log('toLocalTimeString():', formatDate.toLocaleTimeString())

// toDateString() và toTimeString(): Trả về ngày hoặc thời gian theo định dạng ngắn gọn
console.log('toDateString():', formatDate.toDateString())
console.log('toTimeString():', formatDate.toTimeString())
