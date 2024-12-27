// Method Function ( hàm phương thức ): là hàm được định nghĩa / khai báo bên trong đối tượng , được coi là một
//phương thức của đối tượng.

// nhớ lại lesson-04: reference - types.js

let developer = {
    username:'Trine',
    age:30,
    greet: function(){
        console.log(`Hi Aliens, I am ${this.username} from the planet Earth`)
    },
    greetArrow: () => {
        console.log(`Hi Aliens, I am ${this.username} from the planet Earth`) //Arrow Function se không có this
    }
  }
  developer.greet();
  developer.greetArrow();