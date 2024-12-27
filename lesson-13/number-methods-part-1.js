/**
 * Có khá nhiều methods- Phương thức khi xử lý dữ liệu với Number trong javascript.
 * Dưới đây chúng ta sẽ tập trung vào những phương thuwsc quan trọng và được dùng nhiều trong thực tế mà có thể bạn chưa biết.
 * Phần 1 : toFixed(), toPrecision(), toString(), isFinite(), Number.isInteger(), Number.isSafeInteger(),
 * Number.NaN(), isNaN()
 */

// toFixed() Làm tròn một số theo số lượng chữ số thập phân đươc chỉ định trước. Kết quả trả về là String và sẽ làm tròn lên như trong toán học
const num1 = 3.125556789;
const fixedNum = num1.toFixed(2) // Giữ lại 2 chữ số thập phân sau dấu phẩy
console.log('After toFixed(): ' , fixedNum)
console.log('Type After toFixed() :' ,typeof fixedNum)
