// alert("Hello,World!");

// function order(s){
//     for (var t=1;((s.length)< t);t++){

//     }
// }

// function facatorial (s){
//     for(;s < 0;s--){
//         a = s * (s-1)
//         console.log(a)
//     };
    
// };
// console.log(facatorial(4))
// let ans=1
// if (s ==1){
//     return 1;
// }   
// for (let i=1;i<=s;i++){
//     ans = i * ans
// }
// return ans
//     }
   
function factorial(s){
        let ans=1
        if (s ==1){
            return 1;
        }   
        for (let i=1;i<=s;i++){
            ans = i * ans
        }
        return ans
            }
console.log(factorial(10))
function main(a) {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    // Print the area of the circle:
    let area = (3.14 * (a * a));
    console.log(area);
    
    // Print the perimeter of the circle:
    let perimeter=(2 * 3.14 * a)
    console.log(perimeter)
}
