// console.log("Hello World");
// console.warn("This is a warning");
// console.error("Error message");
// var a=35;
// var b=40;
// console.log(a+b);
// var x=0; var y=undefined; // Both mean the same thing.
// console.log(5%2);

// function sum1(p,q){
//     return p+q;
// }
// const z=sum1(56,60);
// console.log(x);
// // An array can be iterated by using arr.forEach(function(Element))\
// // for temporary variables we can use let j=0;
// let kk=1;
// var arr=[2,3,5,7];
// const len=arr.length;
// // arr.push, arr.pop, arr.shift,arr.unshift
class User{
    constructor(email,name)
    {
        this.email=email;
        this.name=name;

    }
    login(){
        console.log("Logged in");
        return this;
    }
    logout(){
        console.log("Logged out");
        return this;
    }
}
class Admin extends User{
    deleteUser(user){
        users=users.filter(u=>{
            return u.email!=user.email;
        })
        // users=users.filter(function(u){
        //     return u.email!=user.email;
        // });
    }
}   
var userOne=new User("abc@gmail.com","ABC");
var userTwo=new User("xyz@gmail.com","XYZ");
var admin=new Admin("admin@gmail.com","Gmail");
var users=[userOne, userTwo,admin];