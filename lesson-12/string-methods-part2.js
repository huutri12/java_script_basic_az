/**
 * Có khá nhiều Methodes - Phương thức khi xử lý dữ liệu String trong JavaScript.
 * Dưới đây chúng ta se tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế ( Phần 2 )
 * toLowerCase(), toUpperCase(), trim(), replace(), match(regex), search(regex), startsWith(), endsWith()
 */

/*
    tolowerCase() chuyển đổi tất cả các ký tự trong chuỗi thành chữ thường. Không làm thay đổi chuỗi ban đầu
 */
const str1 = 'TRIHANDSOME'
const toLowerCaseResult = str1.toLowerCase()
console.log('After toLowerCase(): ', toLowerCaseResult) //kq : trihandsome

console.log('--------------------------------')

/*
    toUpperCase() chuyển đổi tất cả các ký tự trong chuỗi thành chữ hoa. Không làm thay đổi chuỗi ban đầu
*/
const str2 = 'trihandsome'
const toUpperCaseResult = str2.toUpperCase()
console.log('After toUpperCase(): ', toUpperCaseResult) //kq : TRIHANDSOME

console.log('--------------------------------')

/*
    trim() loại bỏ khoảng trắng (space) ở đầu và cuối chuỗi. Không làm thay đổi chuỗi ban đầu
 */
    const str3 = '   "caigido"    '
    const trimResult = str3.trim()
    console.log('After trim(): ', trimResult) //kq :caigido
    console.log(str3)

console.log('--------------------------------')

/*
    replace() thay thế một chuỗi con trong chuỗi bằng một chuỗi khác. Nó chỉ thay thế lần xuất hiện đầu tiên,
muốn thay thế toàn bộ thì phải dùng biểu thức chính quy (regex) với flag g (global). Không làm thay đổi chuỗi ban đầu
*/
const str4 = 'Hello World World World'
const replaceStr = str4.replace('World', 'HuuTriDev!')
const replaceAllStr = str4.replace(/World/g, 'HuuTriDev!')
console.log('After replace() replaceStr: ', replaceStr)
console.log('After replace() replaceAllStr: ', replaceAllStr)
console.log('before str: ',str4)

console.log('--------------------------------')

/*
    match() tìm kiếm và trả về một mảng chứ kết quả khớp với biểu thức chính quy(regex) trong chuỗi. Nếu không
có kết quả khớp, nó trả về null. Chỉ trả về kết quả của lần xuất hiện đầu tiên. Muốn trả về tất cả các kết quả 
thì dùng flag g (global)
*/
const str5 = 'huutridev developer dev dev dev'
const matches = str5.match(/dev/g)
console.log('After match():',matches)
console.log(str5)

console.log('--------------------------------')

// startWith() kiểm tra xem chuỗi có bắt đầu bằng muột chuỗi con cụ thể hay không. Trả về true/false


console.log('--------------------------------')

// endWith() kiểm tra xem chuỗi có kết thúc bằng một chuỗi con cụ thể hay không. Trả về true/ false