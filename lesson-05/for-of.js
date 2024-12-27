/**
 * Trong Javascript, vòng lặp (loop) là một cấu trúc điều khiển dùng để lặp lại một đoạn code nhiều lần.
 * Thường được sử dụng khi cần thực hiện một hành động nhiều lần cho đến khi một điều kiện nào đó được thõa mãn.
 */

// for..of : Dùng để lặp qua các giá trị của một iterable object ( nhưng đối tượng có thể lặp ), phổ biến như 
//Array , String ...vv

let colors = ['red','green','blue']
for(let color of colors){
    console.log(`Color: ${color}`)
}

console.log('-----------------------------------')

let username = 'HuuTriDev'
for(char of username){ 
    console.log(`Username: ${char}`)
}

