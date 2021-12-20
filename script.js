let submitButton = document.querySelectorAll(".submitButton")[0];
let clearList = document.querySelectorAll(".clearItems")[0];
let inputField = document.querySelectorAll(".inputField")[0];
let shoppingDiv = document.querySelectorAll(".shopping-list")[0];
let innerDiv = document.createElement("div");
innerDiv.classList.add("inner");
let removButt = document.getElementsByClassName("remove")
let count = 0;


let addDiv = () => {
  count += 1;  
  let Diving = document.createElement("div");
  let btnRemove = document.createElement("button");
btnRemove.innerText = "X";
btnRemove.classList.add(`remove`);
btnRemove.classList.add(`count${count}`);
  let secondDiv = () => {
    Diving.classList.add("divDiv");
    Diving.innerText = inputField.value;
    Diving.appendChild(btnRemove);
    
  };
 
  secondDiv()
  innerDiv.append(Diving);
  shoppingDiv.appendChild(innerDiv);
  inputField.value = ""
  
  Diving.id = `Div${count}`
  
btnRemove.addEventListener("click", () =>{
 let btn = btnRemove.className.replace(/[A-Za-z]/g, "")
 let num = parseInt(btn)
let removableDiv = document.getElementById(`Div${num}`)
removableDiv.remove();
})




  
};


let clearance = () => {

    let len = document.querySelectorAll(".divDiv").length
    for(let i=0; i< len; i++){
        document.querySelectorAll(".divDiv")[0].remove()
       } 
}




submitButton.addEventListener("click", addDiv);
clearList.addEventListener("click", clearance)
