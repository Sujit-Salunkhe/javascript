let inputstores=[];
let deletebtn;

let gotolist = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        const textinput = document.getElementById("text");
        todoinputs = document.querySelector(".todoinputs");
         const list_of_inputs = document.getElementsByClassName("count")[0];
         if(textinput.value.trim() ===""){
             alert("Please write what you want to do")
            }
        else{
        todovalue  = textinput.value;
        inputstore=document.createElement("div");
        // inputstore.textContent=todovalue;
        inputstore.className="inputlist";
        let check_box=document.createElement("input");
        check_box.type="checkbox";
        check_box.id=todovalue;
        check_box.name=todovalue;
        let label=document.createElement("label")
        label.textContent=todovalue;
        label.htmlFor=todovalue;
        inputstore.appendChild(label)
        inputstore.prepend(check_box); 
        let deleteimg=document.createElement("img");
        deleteimg.className="deleteimg";
        deleteimg.src="delete.png";
        deletebtn=document.createElement("button");
        deletebtn.appendChild(deleteimg);
        inputstore.appendChild(deletebtn);
        todoinputs.prepend(inputstore);
        inputstores.push(inputstore)
        textinput.value = "";
        count_children(todoinputs,list_of_inputs);
        box_size(todoinputs);
        todoinputs.style.display = "block";
        const completedsection_1 = document.getElementsByClassName("completedsection")[0];
        completedsection_1.style.display="none"
    }
    deletebtn.addEventListener('click',(event) =>{
        const delbtn=event.target;
        const deltodo=delbtn.parentNode.parentNode;
        deltodo.remove(); 
        show_hide(todoinputs);
        count_children(todoinputs,list_of_inputs);
        box_size(todoinputs);
    });
     let clearcompleted = document.getElementById("clearcompleted");
     clearcompleted.addEventListener("click", () => {
       const completedsection = document.querySelector(".completedsection");
       inputstores.forEach((inputstore) => {
         const checkbox = inputstore.querySelector("input[type='checkbox']");
         if (checkbox.checked) {
           const parent = checkbox.parentNode;
           completedsection.appendChild(parent);
           completedsection.style.display="none"
           count_children(todoinputs,list_of_inputs);
         } 
       }); 
     });
    
    }
}
let show_hide = (showhidetag) =>{
    if(showhidetag.hasChildNodes()){
    showhidetag.style.display="block"
    }
    else{
    showhidetag.style.display="none"
    }
};
let count_children = (parent,child) => {
    const childCount = parent.childElementCount;
    child.textContent =childCount + " items left";
    }
let box_size =(parent) =>{
    const childCount = parent.childElementCount;
    if(childCount > 9 ){
        parent.style.height="35vh"
        }
    else{
        parent.style.height="auto"
        }
}
let completedonce = () =>{
    todoinputs.style.display="none"
    const completedsection_1 = document.getElementsByClassName("completedsection")[0];
    completedsection_1.style.display="block"
}
let activeonece =() =>{
    todoinputs.style.display="block"
    const completedsection_1 = document.getElementsByClassName("completedsection")[0];
    completedsection_1.style.display="none"
}