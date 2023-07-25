// console.log("start")
// setTimeout(function(){
//     console.log("hey this is time out")
// },3000)
// console.log("end")
function loadScript(src,suj){
    const script=document.createElement("script");
    script.src=src;
    script.onload=function(){
        console.log("Script is loaded :",src)
        suj(null,src);
        
    script.onerror=function(){
        console.log("error loading with this script" + src)
        suj(new Error("got some error"));
        }}
    document.body.append(script)
}
let sujit =(error,src)=>{       
    if (error){
          console.log(error)
          return 
    }
    alert("hey sujit" +src)
}
loadScript("https://code.jqddsdffsdfduery.com/jquerfsfy-3.2.1.slifdsffsdsfdsfsfm.min.js",sujit
)