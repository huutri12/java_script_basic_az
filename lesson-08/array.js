/**
 * Trong Javascript, "Mảng" (array) là một kiểu dữ liệu dùng để lưu trữ danh sách các giá trị.
 * Các giá trị trong mảng có thể là bất kỳ kiểu dữ liệu nào, number, string, object, thậm chí là các mảng khác.
 * Mảng trong JavaScript có các chỉ số - Index bắt đầu từ 0, nghĩa là phần tử đầu tiên của mảng có index là 0,
 phần tử thứ 2 có index là 1, và cứ tiếp tục tăng dần.
 */

 /** Ví dụ cơ bản về cách tạo và sử dụng mảng trong JavaScript */

 // Tạo một Array chứa các số từ 1 - 5
 let number = [1, 2, 3, 4, 5]
console.log('độ dài của mảng: ', number.length)
 
 // Truy cập phần tử đầu tiên của mảng ( theo index = 0)
 console.log('First item of number: ',number[0]);

 // Truy cập phần tử cuối cùng của mảng ( theo index = array.length - 1)
 console.log('Last item of number: ',number[number.length-1]);

 // Mảng có thể chứa bất kỳ kiểu dữ liệu nào, ví dụ: 
 let mixedArray = [1, 'hello', true, null, undefined, {username:'HuuTriNe'}, [1, 2, 3]];
 console.log('mixedArray', mixedArray);


 