/**
 * Có khá nhiều Methodes - Phương thức khi xử lý dữ liệu String trong JavaScript.
 * Dưới đây chúng ta se tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế ( Phần 1 )
 * chatAt(), concat(), include(), indexOf(), slice(), split(), substring()
 */

/* chatAt() trả về ký tự tại một vị trí cụ thể trong chuỗi. Vị trí bắt đầu từ 0. Trả về string rỗng nếu vị trí
không tồn tại. 
 */
const str = 'Hello World'
console.log(str.charAt(0)) //kq : H
console.log(str.charAt(1)) //kq : e
console.log(str.charAt(6)) //kq : W
console.log(str.charAt(70)) //kq : ''
console.log(typeof str.charAt(70)) //kq : string

console.log('--------------------------------')

/* concat() được sử dụng để nối hai hoặc nhiều chuỗi lại với nhau và trả về một chuỗi mới.
 Không làm thay đổi chuỗi gốc ban đầu.
*/
const str2 = 'HuuTriDev'
const separator = ' - '
const str3 = 'From Vietnamese'
const concatResult = str2.concat(separator).concat(str3);
console.log('After concat(): ', concatResult)

console.log('--------------------------------')

/* include() kiểm tra xem chuỗi có chứa một chuỗi con cụ thể hay không. Trả về true nếu chuỗi con được tìm thấy,
ngược lại trả về false. Có phân biệt chữ hoa chữ thường.
*/
const str4 = 'HuuTriDev'
const includeResult = str4.includes('Tri')
console.log('After includes(): ', includeResult) //kq: false

console.log('--------------------------------')

/* indexOf() trả về index của lần xuất hiện đầu tiên của chuỗi con trong chuỗi. Nếu chuỗi con không được tìm thấy,
nó trả về -1. Có phân biệt chữ hoa chữ thường.
*/
const str5 = 'HuuTriDev'
const indexOfResult = str4.indexOf('Tri')
console.log('After indexOf(): ', indexOfResult) // kq : 3

console.log('--------------------------------')

/* split() chia chuỗi thành một mảng các chuỗi con dựa trên một ký tự nhận diện. Không làm thay đổi chuỗi gốc ban
đầu.
*/
const str6 = 'JS, TS, React, Node, Express, Nest'
const splitResult = str6.split(', ')
console.log('After split(): ', splitResult) //kq :  [ 'JS', 'TS', 'React', 'Node', 'Express', 'Nest' ]

console.log('--------------------------------')

/* slice() trả về một chuỗi con từ một chuỗi gốc ban đầu, từ vị trí startIndex đến endIndex ( không bao gồm
endIndex). Không làm thay đổi chuỗi gốc ban đầu. Nếu chúng ta cố tình để start > end thì slice sẽ trả về chuỗi
rỗng.
*/
const str7 = 'Javascript is fun but not easy!'
const sliceResult_1 = str7.slice(0, 10)
const sliceResult_2 = str7.slice(10, 0)
console.log('After slice() 01: ', sliceResult_1) // kq: Javascript
console.log('After slice() 02: ', sliceResult_2) // kq: ""

console.log('--------------------------------')

/* subtring() khá giống slice(): Nó cũng trả về một chuỗi con từ một chuỗi gốc ban đầu, từ chỉ số startIndex đến
endIndex ( không bao gồm endIndex ). Tuy nhiên khác với slice() ở 1 điểm: substring() sẽ hoán đổi startIndex và
endIndex nếu chúng ta vô tình để startIndex lớn hơn endIndex.
*/

const str8 = 'Javascript is fun but not easy!'
const substringResult_1 = str8.substring(0, 10)
const substringResult_2 = str8.substring(10, 0)
console.log('After substring() 01: ', substringResult_1) // kq: Javascript
console.log('After substring() 02: ', substringResult_2) // kq: Javascript