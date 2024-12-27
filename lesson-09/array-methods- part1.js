
/**
 *  Có khá nhiều Methods - Phương thức khi xử lý dữ liệu mảng trong JavaScript.
 *  Dưới đây chúng ta sẽ tập trung vào những phuong thức quan trọng và được dùng nhiều trong thực tế.
 * Phần 1: push(), pop(), shift(), unshift(), forEach(), map(), filter(), find(), reduce(), some()
 */

 // Tạo một Array chứa các số từ 1 - 5
let numbers = [1, 2, 3, 4, 5]
console.log('Length of number: ', numbers.length)

//push() - thêm phần tử vào cuối cùng của mảng
numbers.push(6)
console.log('After Push: ', numbers) // kq: [1, 2, 3, 4, 5, 6]

//pop() - Loại bỏ phần tử cuối cùng của mảng
numbers.pop();
console.log('After Pop: ', numbers)// kq: [1, 2, 3, 4, 5]

// shift() - Loại bỏ phần tử đầu tiên của mảng
numbers.shift();
console.log('Shift Pop: ', numbers)// kq: [2, 3, 4, 5]

// unShift() - Thêm phần tử vào đầu tiên của mảng
numbers.unshift(1)
console.log('unShift Pop: ', numbers)// kq: [1, 2, 3, 4, 5]

// forEach() - Lặp qua từng phần tử của mảng 
console.log('Start forEach: ')
numbers.forEach( (number, index) => {
    console.log(`Index: ${index} - Value: ${number}`);
})

// map() - Tạo một mảng mới với các phần tử được biến đổi từ mảng gốc, ví dụ bình phương từng phần tử.
// nhưng không ảnh hưởng gì tới mảng ban đầu
let squareNumber = numbers.map((number) => {
    return number * number;
})
console.log('After map() - numbers: ',numbers) //kq: [ 1, 2, 3, 4, 5]
console.log('After map() - squareNumber: ',squareNumber) //kq: [ 1, 4, 9, 16, 25 ]

//filter() - Tạo ra một mảng mới với các phần tử thỏa mãn điều kiện, ví dụ lấy các số chẵn.
let fillNumber = numbers.filter((number) => {
    return number % 2 === 0;
})
console.log('After filter() - fillNumber: ',fillNumber) //kq: [ 2, 4 ]
console.log('Before filter() - numbers: ',numbers) 

// find() - Tìm phần tử đầu tiên thỏa mãn điều kiện
let foundNumber = numbers.find((number) => {
    return number > 3;
})
console.log('After find() - foundNumber: ',foundNumber) //kq: [ 4 ]

//reduce() - Tính toán một giá trị duy nhất từ mảng, ví dụ tính tổng các số trong mảng
let sum = numbers.reduce((total, number) => {
    return total + number;
}, 0)
console.log('After reduce() - sum: ',sum) //kq: [ 15 ]

//some() - Kiểm tra xem mảng có ít nhất một phần tử thỏa mãn điều kiện hay không, trả về boolean true/false
let hasEvenNumber = numbers.some((number) => {
    console.log('Test method some(): ', number)
    return number % 2 === 0;
})
console.log('After some() - hasEvenNumber: ',hasEvenNumber) //kq: [ true ]






