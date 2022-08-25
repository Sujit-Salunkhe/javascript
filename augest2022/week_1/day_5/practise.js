// console.log(a.length)
// // console.log(a.indexOf("good"))
// let a="sujit is good boy";
// // console.log(a.slice(0,5))
// let id=document.getElementById('click');
// console.log(id);
// let ids=document.getElementsByClassName('container');
// console.log(ids);
// ids[0].style.background="green"
// ids[0].classList.add('navbar')
// ids[1].classList.add('button')
// ids[1].classList.remove('button')
// let info=document.getElementsByClassName('info')
// console.log(info)
// info[0].style.color='red'
// info[1].style.background='red'
// info[0].classList.add('counter')
// console.log(info[0].innerHTML)
// // console.log(info[0].innerText)
// let tag=document.getElementsByTagName('div')
// // console.log(tag)
// let createelement=document.createElement('b')
// createelement.innerText="this is written by javascript"
// tag[0].appendChild(createelement)
// tag[0].style.border='2px solid red'
// tag[0].style.background='purple'
// tag[0].classList.add('purple')
// let classname=document.getElementsByClassName('container')
// createelement2=document.createElement('b')
// createelement2.innerText="this is written by class name"
// classname[1].appendChild(createelement2)
// // tag[0].replaceChild(classname,createelement)
// createelement3=document.createElement('h1')
// createelement3.innerText="this is 3rd element"
// tag[0].replaceChild(createelement3,createelement)
function clicked(){
    console.log('button was clicked')
}
window.onload=function(){
    console.log('the document was loaded')
}
firstcontainer.addEventListener('click',function(){
    console.log('clicked.....')
})   

firstcontainer.addEventListener('mouseover',function(){
    console.log('mouse')
})   

firstcontainer.addEventListener('mouseout',function(){
    console.log('outcleanbold.....')
})   
firstcontainer.style.background='blue'
