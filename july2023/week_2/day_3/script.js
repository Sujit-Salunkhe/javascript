// let a =[1,2,3,4,5]
// function modifyarray(a){
//     for (let x of a) {
//         if ( ( x % 2 ) === 0){
//                 x *=2
//         }else {
//                 x *= 3
//         }
//     }
//     return a
// }   

// console.log(modifyarray(a));

// for(let value of a){
//     console.log(value);
// }
// console.log(modi(a))
// function modi(a){
//     for(let i = 0; i<a.length; i++){
//         if( (a[i] % 2) == 0 ){
//             a[i] *=2;
//         }else {
//             a[i] *= 3;
//         }
//     }
//     return a;
// }
// function find(sujit){
//     vowel=['a',"e","i","o","u"]
//     for(let value of sujit){
//         if(sujit[0] in vowel){
//             console.log(value);
//             last_value = sujit.length
//             console.log(sujit[0] == sujit[last_value -1])
//         }
//     }
// }
sujit="eujitsae"
// for(let value of sujit){
//     console.log(value);
//     last_value = sujit.length
//     console.log(sujit[0] == sujit[last_value -
console.log(find(sujit));
function find(re){
    vowel=['a',"e","i","o","u"]   
    if(vowel.includes(re[0])){
            last_value = re.length;
            return (re[0] == re[last_value -1])
        }
    }   
