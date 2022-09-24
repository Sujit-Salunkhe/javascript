// alert("Sujit is want to be the best devloper ever")
// alert(parseFloat("35.67j"))
// alert(parseInt("67.89sujit"))
// let x=[45,6,6,6,57,8,7,5];
// alert(Math.max(x));
// alert(Math.random())
// alert(123e9);
// alert(Math.floor(9.87789089799))
// function sum(a,b){
//     return a + b
// }
// let gusest=`guest:
// sujit, 
// prasad,
// aniket, 
// devidas`
// alert(gusest);
// alert( `The backslash: \\` ); // The backslash: \
// So-called “escaped” quotes \', \", \` are used to insert a quote into the same-quoted string.

// For instance:

// // alert( 'I\'m the Walrus!' ); // I'm the Walrus!
// let str = `Hello`;

// alert( str[1000] ); // undefined
// alert( str.charAt(1000) ); // '' (an empty string)
// We can also iterate over characters using for..of:

// for (let char of "Hello") {
//   alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
// // }
// let str = 'Hi';

// str[0] = 'h'; // error
// alert( str[0] ); // doesn't work
// The usual workaround is to create a whole new string and assign it to str instead of the old one.

// For instance:

// let str = 'Hi';

// str = 'h' + str[1]; // replace the string

// // alert( str ); // hi
// alert( 'Interface'.toUpperCase() ); // INTERFACE
// alert( 'Interface'.toLowerCase() ); // interface
// Or, if we want a single character lowercased:

// alert( 'Interface'[0].toLowerCase() ); // 'i'
// Searching for a substring
// There are multiple ways to look for a substring within a string.

// str.indexOf
// The first method is str.indexOf(substr, pos).

// It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.

// For instance:

// let str = 'Widget with id';

// alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
// alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

// alert( str.indexOf("id") ); // 1