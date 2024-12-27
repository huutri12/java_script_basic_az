
// Constructor function ( hàm khởi tạo - hàm tạo ): sử dụng để tạo đối tượng mới . Thường được kết hợp với từ khóa new.
 function Developer(username){
    this.username = username;
    this.greet = function (){
        console.log(`Hi Aliens, I am ${this.username} from the planet Earth`)
    }
 }

 const huuTri = new Developer('huuTri(Fake)');
 huuTri.greet();

 const huuTriReal = new Developer('huuTri(Real)');
 huuTriReal.greet();