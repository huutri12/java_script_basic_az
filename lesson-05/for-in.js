/**
 * Trong Javascript, vòng lặp (loop) là một cấu trúc điều khiển dùng để lặp lại một đoạn code nhiều lần.
 * Thường sử dụng khi cần thực hiện một hành động nhiều lần cho đến khi một điều kiện nào đó được thỏa mãn.
 */

//for in: lặp qua các thuộc tính của một đối tượng.

let developer = {
    username : 'huuTri',
    age : 30,
    gender: 'male',
    country: 'Vietnam',
    hobbies: ['coding', 'reading', 'playing game', 'traveling']
}

for(let key in developer){
    console.log(`${key}: ${developer[key]}`)
    if(key === 'hobbies'){
        console.log(developer[key]);
    }
}
console.log('--------------------------------')


// thay vì chúng ta phải log từng dòng một thì chúng ta dùng for in để duyệt qua từng key của một objects.