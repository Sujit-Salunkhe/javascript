const color = () =>{
colorcode=[];
for(let i=0;i < 3;i++){
const number = Math.floor(Math.random() * 256);
colorcode.push(number);
}
const c=document.body;
c.style.background = `rgb(${colorcode[0]},${colorcode[1]},${colorcode[2]})`
}
color()
