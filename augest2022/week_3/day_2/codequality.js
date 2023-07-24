// let a=78
// let b=90
// alert(a + b)
//     n=10
//     primenumber:for(let i=2;i < n;i++){
//         for(let j=2;j<i;j++){
//             if(i % j ==0){
//                 continue primenumber;
//             }
//         }
//     alert(i)
// }
// function hello(name){
//     let pharce=`hello ,${name}`;
// alert(pharce);

// }
// sujit salunkhe yuvraj
// 12345678901234576890
// let user={
//     name:"sujit",
//     age:18,
//     Education:"Degree_holder with lot of knowledge",    

// };
// user.admin="Admin is the king of the group"
// // alert(user.name);
// // alert(user.admin);
// // delete user.age
// // alert(user.age);
// let key=prompt("What you want to know about a user","name")
// alert(user[key])
// let fruit=prompt("which fruit do you want to buy","apple")
// let dic={
//     [fruit]:5
// }
// alert(dic[fruit])
function  make_users(name,age,Degree_holder){
    return {
        name:name,
        age:age,
        Eduacation:Degree_holder}
}
let user=make_users('sujit',18,"sdhfd")
alert(user.name)


