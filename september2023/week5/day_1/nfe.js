// function sujit(sujit,sfjk,fd){
//     alert("sujit is king")
// }
// alert(sujit.name)
// alert(sujit.length)
function ask(question, ...handlers) {
    let isYes = confirm(question);
  
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  
  }
  
  // for positive answer, both handlers are called
  // for negative answer, only the second one
  ask("Question?", () => alert('You said yes'), result => alert(result));