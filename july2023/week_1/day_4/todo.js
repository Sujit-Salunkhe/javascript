let inputstores = [];
let deletebtn;

let gotolist = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    const textinput = document.getElementById("text");
    todoinputs = document.querySelector(".todoinputs");
    const list_of_inputs = document.getElementsByClassName("count")[0];
    if (textinput.value.trim() === "") {
      alert("Please write what you want to do");
    } else {
      todovalue = textinput.value;
      inputstore = document.createElement("div");
      inputstore.className = "inputlist";
      let check_box = document.createElement("input");
      check_box.type = "checkbox";
      check_box.id = todovalue;
      check_box.className = "checkbox";
      check_box.name = todovalue;
      let label = document.createElement("label");
      label.id = "label";
      label.textContent = todovalue;
      label.htmlFor = todovalue;
      inputstore.appendChild(label);
      inputstore.prepend(check_box);
      let deleteimg = document.createElement("img");
      deleteimg.className = "deleteimg";
      deleteimg.src = "images.jpeg";
      deletebtn = document.createElement("button");
      deletebtn.className = "deletebtn";
      deletebtn.appendChild(deleteimg);
      inputstore.appendChild(deletebtn);
      todoinputs.prepend(inputstore);
      inputstores.push(inputstore);
      textinput.value = "";
      count_children(todoinputs, list_of_inputs);
      box_size(todoinputs);
      todoinputs.style.display = "block";
      const completedsection_1 =
        document.getElementsByClassName("completedsection")[0];
      completedsection_1.style.display = "none";
      box_size(completedsection_1);
    }
    deletebtn.addEventListener("click", (event) => {
      const delbtn = event.target;
      const deltodo = delbtn.parentNode.parentNode;
      deltodo.remove();
      count_children(todoinputs, list_of_inputs);
      box_size(todoinputs);
      box_size(completedsection_1);
      deletbtnhideshowdisplay(event, todoinputs, completedsection_1);
    });
    let clearcompleted = document.getElementById("clearcompleted");
    clearcompleted.addEventListener("click", () => {
      const completedsection = document.querySelector(".completedsection");
      inputstores.forEach((x) => {
        const checkbox = x.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
          const parent = checkbox.parentNode;
          completedsection.appendChild(parent);
          completedsection.style.display = "none";
          count_children(todoinputs, list_of_inputs);

          const completedsection_1 = document.getElementsByClassName("completedsection")[0];
          box_size(completedsection_1);
          box_size(todoinputs);
        }
      });
    });
  }
};
let count_children = (parent, child) => {
  const childCount = parent.childElementCount;
  child.textContent = childCount + " items left";
};
let box_size = (parent) => {
  const childCount = parent.childElementCount;
  if (childCount > 5) {
    parent.style.height = "35vh";
  } else {
    parent.style.height = "auto";
  }
};

let completedonce = () => {
  todoinputs.style.display = "none";
  const completedsection_1 =
    document.getElementsByClassName("completedsection")[0];
  completedsection_1.style.display = "block";
  box_size(completedsection_1);
};

let activeonece = () => {
  todoinputs.style.display = "block";
  const completedsection_1 =
    document.getElementsByClassName("completedsection")[0];
  completedsection_1.style.display = "none";
  box_size(completedsection_1);
};

let gotoinputtext = document.getElementById("text");
document.addEventListener("keydown", (event) => {
  if (event.key === "/") {
    event.preventDefault();
    gotoinputtext.focus();
  }
});

let deletbtnhideshowdisplay = (event, todoinputs, completedsection) => {
  const completedsection_1 =
    document.getElementsByClassName("completedsection")[0];
  if (event.target === completedsection_1) {
    todoinputs.style.display = "none";
  } else {
    completedsection.style.display = "none";
  }
};
