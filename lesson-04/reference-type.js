/** Nhóm các kiểu dữ liệu tham chiếu - Reference Types*/

/**
 * Các giá trị tham chiếu không được lưu trữ trực tiếp trong ngăn xếp(Stack) mà sẽ tham chiếu đến đại chỉ của
  đối tượng trong Heap Memory.
 * Các giá trị tham chiếu có thể thay đổi sau khi chúng được tạo ra.
 * Khi gán một đối tượng A cho B, thì cả A và B sẽ tham chiếu đến cùng một đối tượng, chứ không tạo ra bản sao độc lập
  riêng biệt.
 * Reference Types bao gồm các kiểu dữ liệu phổ biến sau: 
 */

  //Object( Đối tượng) : Đại diện cho một tập hợp các thuộc tích và phương thức.

    let developer = {
    username:'Trine',
    age:30,
    greet: function(){
        console.log('Hi Aliens, I am ' + this.username +' from the planet Earth')
        console.log(`Hi Aliens, I am ${this.username} from the planet Earth`)
    }
  }
  developer.greet();

  //Array(Mảng): Một loại đối tượng đặc biệt để lưu trữ danh sách các giá trị.

    let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'purple'] ;

  //Function: Đại diện cho các hàm xử lý , cũng được coi là một loại đối tượng đặc biệt.