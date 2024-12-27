/**
 *  Có khá nhiều Methods - Phương thức khi xử lý dữ liệu mảng trong JavaScript.
 *  Dưới đây chúng ta sẽ tập trung vào những phuong thức quan trọng và được dùng nhiều trong thực tế.
 * Phần 2: concat(), slice(), splice(), every(), findIndex(), toString(), join()
 */

/* concat() dùng để nối hai hoặc nhiều mảng lại với nhau. Không làm thay đổi các mảng gốc mà trả về một mảng mới 
chứa tất cả các phần tử của mảng được kết nối.
*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatResult = arr1.concat(arr2);
console.log('After concat(): ',concatResult) // kq : [1, 2, 3, 4, 5, 6]

console.log('--------------------------------')

/* slice() trả về một mảng con của mảng ban đầu, từ vị trí startIndex đến endIndex (không bao gồm endIndex), Không
làm thay đổi mảng gốc ban đầu.
 */
const arr3 = [1, 2, 3, 4, 5, 6];
const sliceResult = arr3.slice(1, 4)
console.log('After slice(): ',sliceResult) // kq: [2, 3, 4]

console.log('--------------------------------')

/* splice() dùng để thay đổi nội dung của mảng bằng cách xóa, thay thế hoặc thêm phần tử mới. Sẽ làm thay đổi mảng
gốc ban đầu
*/
const arr4 = [1, 2, 3, 4, 5, 6]
const spliceResult = arr4.splice(2, 3, 'a', 'b', 'c') // bắt đầu từ vị trí index 2,xóa 3 phần tử (3, 4, 5) và
// thêm vào 'a', 'b', 'c'.
console.log('After splice(): ',spliceResult) // kq : [ 3, 4, 5 ]
console.log('Before splice(): ',arr4) // kq : [ 1, 2, 'a', 'b', 'c', 6 ]

console.log('--------------------------------')

/* every() kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện của hàm callback hay không. Trả về true
nếu tất cả đều thỏa mãn , ngược lại trả về false.
*/
const arr5 = [1, 2, 3, 4, 5, 6]
// const allPositive = arr5.every((num) => {
//     return num > 0;
// })

const allPositive = arr5.every(num => num > 0)

console.log('After every(): ',allPositive) // kq : [ true ]

console.log('--------------------------------')

/* findIndex() trả về chỉ số index của phần tử đầu tiên trong mảng thỏa mãn điều kiện trong hàm callback. Nếu không 
có phần tử nào thỏa mãn, sẽ trả về -1
*/
const arr6 = [1, 2, 3, 4, 5, 6]
const findIndexResult = arr6.findIndex(num => num > 3)
console.log('After findIndex():', findIndexResult) // kq: 3

console.log('--------------------------------')

/* 
toString() Nối tất cả các phần tử trong mảng thành một chuỗi String
*/
const arr7 = [1, 2, 3, 4, 5, 6]
const toStringResult = arr7.toString()
console.log('After toString():', toStringResult) //kq "1,2,3,4,5,6"
console.log('After toString() typeof:', typeof toStringResult)

console.log('--------------------------------')

/* join() Nối tất cả phần tử trong mảng thành một chuỗi String ( khác với toString() ở điểm có thể chỉ định thêm dấu
phân cách)
*/
const arr8 = [1, 2, 3, 4, 5, 6]
const joinResult = arr8.join(' - ')
console.log('After join()', joinResult)
