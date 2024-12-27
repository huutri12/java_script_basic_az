/**
 * Javascript là ngôn ngữ được định kiểu dữ liệu linh hoạt (dinamic), điều này sẽ rất tiện lợi nhưng lại cũng
đồng nghĩa với việc dễ xẩy ra những bug phát sinh trong quá trình development nếu bạn chưa nắm rõ được cốt
lõi về các kiểu dữ liệu
 * Vậy nên mới có một thứ tên là TypeScript được sinh ra.
 */


/**
 * Ví dụ về sự khác nhau giữa Primitive types và Reference types để có thể hiểu rõ hơn.
 */

//Primitive types
let username = 'Tri';
let copyUserName = username;
copyUserName = 'bro'
console.log('username: ', username);
console.log('copyUserName: ', copyUserName);
console.log('----------------------------------');



//Reference types
let objectA = { username : 'HuuTri'}
let objectB = objectA; // lúc này cả object B và objectA sẽ tham chiếu đến cùng một đối tượng
objectB.username = 'Developer'
console.log('objectA: ', objectA);
console.log('objectB: ', objectB);