/**
 * Có khá nhiều Methods - Phương thức khi xử lý dữ liệu Object trong JavaScript.
 * Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế mà có thể bạn chưa biết.
 * Phần 1: create(), assign(), defineProperty(), keys(), values(), entries(), fromEntries()
 */

//Object.create() tạo ra một đối tượng mới dựa trên đối tượng cho trước là nguyên mẫu - prototype.
const person = {
    greet() {
        console.log( "Hello there!" )
    }
};
const huuTriDev = Object.create(person) // tạo ra một đối tượng mới huuTriDev với person làm prototype.
// Vì vậy huuTriDev sẽ kế thừa phương thức greet() từ person.
huuTriDev.name = "huuTriDev mot lap trinh vien.";

huuTriDev.greet(); // "Hello there!"
console.log(huuTriDev.name) // "huuTriDev mot lap trinh vien."

console.log('------------------------------------')
/**
 * Object.assign() sao chép tất cả các thuộc tính của một hoặc nhiều đối tượng nguồn ban đầu vào đối tượng đính.Kêt quả trả về đối tượng đính
 * Nếu một thuộc tính đã tồn tại trong đối tượng đích thì nó sẽ bị ghi đè.
 * Phương thức này sẽ làm thay đổi đối tượng đích, không làm thay đổi đối tượng nguồn.
 */

const targetObj = { a: 1, b: 2}; // đối tượng đích
const originalObj = {b: 4, c: 5};// đối tượng nguồn
const result = Object.assign(targetObj, originalObj);
console.log('Object.assign() > result: ',result); //{a: 1, b: 4, c: 5}
console.log('Object.assign() > originalObj: ',originalObj); //{b : 4, c: 5}( đối tượng nguồn không bị thay đổi)
console.log('Object.assign() > targetObj: ',targetObj); // {a: 1, b: 4, c: 5}(đối tượng đích đã bị thay đổi)

console.log('------------------------------------')
// Object.defineProperty() thêm hoặc sửa đổi "một" thuộc tính dựa trên đối tượng, và có thể kiểm soát chính xác hành vi của thuộc tính đó.
const obj1 = {};
Object.defineProperty(obj1, 'name', {
    value: 'HuuTriDev',
    writable:false, // Không cho phép thay đổi giá trị
});
console.log('Object.defineProperty(): ', obj1.name);//"HuuTriDev"
obj1.name = " mot lap trinh vien"; // không có tác dụng vì writable : false
console.log('Object.defineProperty(): ', obj1.name) // "HuuTriDev"

console.log('------------------------------------')
/*Object.defineProperties() thêm hoặc sửa đổi "nhiều" thuộc tính trên một đối tượng cùng một lúc, cũng có thể kiểm soát chính xác hành vi
của các thuộc tính đó.
*/
const obj2 = {};
Object.defineProperties(obj2, {
    firstName:{
        value : 'Tri',
        writable: true,
    },
    lastName: {
        value : 'Dev',
        writable: false
    }
});
console.log('Object.defineProperties(): ',obj2.firstName); // "Tri"
console.log('Object.defineProperties(): ',obj2.lastName); // "Dev"
obj2.firstName = "HuuTri"; // có tác dụng vì writable : true
obj2.lastName = "Developer"; // không có tác dụng vì writable : false
console.log('Object.defineProperties(): ',obj2.firstName); // "HuuTri"
console.log('Object.defineProperties(): ',obj2.lastName); // "Dev"

console.log('------------------------------------')
// Object.keys() trả về một mảng (array) chứa toàn bộ tên thuộc tính của một đối tượng.
const obj3 = {a: 1, b: 2, c: 3};
console.log('Object.keys(obj3): ',Object.keys(obj3)); //  [ 'a', 'b', 'c' ]

console.log('------------------------------------')
// Object.values() trả về một mảng (array) chứa toàn bộ các giá trị của các thuộc tính, của một đối tượng.
const obj4 = {a: 1, b: 2, c: 3};
console.log('Object.values(obj4): ',Object.values(obj4)); //  [ 1, 2, 3 ]

console.log('------------------------------------')
// Object.entries() trả về một mảng (array) gồm các cặp [key, value] của các thuộc tính, của một đối tượng.
const obj5 = {a: 1, b: 2, c: 3};
console.log('Object.entries(obj5): ',Object.entries(obj5));

console.log('------------------------------------')
// Object.fromEntries() chuyển đổi một mảng các cặp [keyu, value] thành một đối tượng. ( ngược lại của Object.entries())
const entries = [ [ "a", 1 ], [ "b", 2 ], [ "c", 3 ] ];
console.log('Object.fromEntries(entries): ', Object.fromEntries(entries)); //{a: 1, b: 2, c: 3}


