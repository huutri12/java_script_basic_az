/**
 * Có khá nhiều Methods - Phương thức khi xử lý dữ liệu Object trong JavaScript.
 * Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế mà có thể bạn chưa biết.
 * Phần 2: freeze(), isFrozen(), seal(), isSealed(), is(), hasOwn(), groupBy()
 */

// Object.freeze() đóng băng một đối tượng, nghĩa là không cho phép thêm, sửa, xóa các thuộc tính của đối tượng đó.
const obj1 = { a: 1, b: 2}
Object.freeze(obj1);
// 3 trường hợp thêm sửa xóa dưới đây đều không có tác dụng
obj1.c = 4 // thêm
obj1.a = 3 // sửa
delete obj1.b // xóa
console.log('After Object.freeze(): ', obj1) // { a: 1, b: 2}

console.log('--------------------------------')
// Object.isFrozen() kiểm tra xem một đối tượng đã được đóng băng freeze() hay chưa.
console.log('Object.isFrozen(obj1): ', Object.isFrozen(obj1));

console.log('--------------------------------')
//Object.seal() niêm phong một đối tượng, không cho phép thêm hoặc xóa các thuộc tính, nhưng vẫn cho phép sửa đổi các giá trị của object.
const obj2 = { a: 1, b: 2}
Object.seal(obj2);
obj2.c = 4; // thêm => không được
obj2.a = 3; // sửa => ok
delete obj2.b; // xóa => không được
console.log('After Object.seal(): ',obj2)

console.log('--------------------------------')
// Object.isSealed() kiểm tra xem một đối tượng đã được niêm phong hay chưa.
console.log('Object.isSealed(): ',Object.isSealed(obj2))

console.log('--------------------------------')
//Object.is() so sánh xem hai giá trị có giống nhau hay không.
//Tương tự như toán tử ===, tuy nhiên sẽ có một số khác biệt trong việc so sánh (NAN) và ( -0 với +0)\

console.log('Object.is(17, 17): ',Object.is(17, 17)); // true
console.log('Object.is(null, undefined): ',Object.is(null, undefined)); // false

console.log('Object.is(NaN, NaN): ',Object.is(NaN, NaN)); // true
console.log('Object.is(NaN === NaN): ',NaN === NaN); // false

console.log('Object.is(0, -0): ',Object.is(0, -0)); // false
console.log('Object.is(0 === -0): ',0 === -0); // true

console.log('--------------------------------')
//Object.hasOwn() kiểm tra xem một đối tượng có chứa một thuộc tính cụ thể hay ko
const obj3 = {name: 'Tri', age: 30};
console.log('Object.hasOwn() > name: ', Object.hasOwn(obj3, 'name')) // true
console.log('Object.hasOwn() > age: ', Object.hasOwn(obj3, 'age')) // true
console.log('Object.hasOwn() > gender: ', Object.hasOwn(obj3, 'gender')) // false

console.log('--------------------------------')
/** 
 * Object.groupBy() sử dụng để nhóm các giá trị trong một đối tượng dựa trên một tiêu chí cụ thể.
 * Lưu ý quan trọng: Object.groupBy() mới xuất hiện , cụ thể từ tháng 3 năm 2024, nó mới chỉ hoạt động trên 
 một số tình duyệt phổ biến đã Update phiên bản mới nhất
 */