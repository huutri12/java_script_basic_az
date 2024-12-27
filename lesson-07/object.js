
/**
 * Trong Javascript, đối tượng (object) là một cấu trúc dữ liệu linh hoạt và mạnh mẽ, cho phép lưu trữ và quản lý các
 dữ liệu phức tạp. Đối tượng bao gồm các cặp key-value( khóa - giá trị ). Mỗi khóa là một chuỗi ( string )
 và giá trị có thể là bất kỳ loại dữ liệu nào, bao gồm cả các đối tượng khác ( nested object).
 */

 /** 2 cách Tạo Object với cú pháp object literal và từ khóa new Object() */

 //Cách khai báo 01: Cú pháp object literal

 let developer = {
    username:'Trine',
    age:30,
    greet: function(){
        console.log(`Hi Aliens, I am ${this.username} from the planet Earth`)
    },
    skill : ['java','javascript','NodeJS'],
    position:{
        frontEnd:['React', 'Next.js','Vue.js', 'Nuxt.js'],
        backEnd:['Node.js', 'Express', 'Nest.js'],
        fullStack: true
    }
  }
  console.log(developer)

  console.log('--------------------------------')

 // Cách khai báo 02: Từ khóa new Object()

//  let developer2 = new Object()
//  developer2.username = 'Trine';
//  developer2.age = 30;

//  console.log(developer2)

//  console.log('--------------------------------')

// 2 cách để truy cập đến thuộc tính của Object

// console.log(developer.username)
// console.log(developer['username'])

// console.log('--------------------------------')

// Thêm / Sửa / Xóa Thuộc tính của Object

developer.gender = 'male';
developer.age = 25;
delete developer.greet

console.log(developer);