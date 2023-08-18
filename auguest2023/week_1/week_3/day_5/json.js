// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup references room
//   };
// room.occupiedBy = meetup; // room references meetup
// alert( JSON.stringify(meetup, function replacer(key, value) {
//     alert(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
//   })); 
// let room = {
//     number: 23,
//     toJSON() {
//       return this.number;
//     }
//   };
  
//   let meetup = {
//     title: "Conference",
//     room
//   };
  
//   alert( JSON.stringify(room) ); // 23
  
//   alert( JSON.stringify(meetup) );
  let user = {
    name: "John Smith",
    age: 35
  };
  
  let user2 = JSON.parse(JSON.stringify(user));