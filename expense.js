var expense = document.getElementById('expense');
var description = document.getElementById('description');
var category = document.getElementById('category');
var submit =document.getElementById('submit');
var ul =document.getElementById('list');
var des ="";
var ex="";
var cat="";
let arrayLocal =[];

ul.addEventListener('click',onedit);
ul.addEventListener('click',ondelete);


expense.addEventListener('input',function(){
    ex = expense.value;
})
description.addEventListener('input',function(){
    des = description.value;
})
category.addEventListener('input',function(){
    cat = category.value;
})
submit.addEventListener('click',submitButton)
var par = JSON.parse(localStorage.getItem(0));
console.log(par)
console.log(par[0].desl);
function submitButton (e){
    e.preventDefault();
    arrayLocal.push({'exl':ex,'desl':des,'catl':cat})
    let st =JSON.stringify(arrayLocal)
    localStorage.setItem(0,st);
    // localStorage.setItem('exl',ex)
    // localStorage.setItem('desl',des)
    // localStorage.setItem('catl',cat)
    let li = document.createElement('li');
    let text =document.createTextNode(expense.value+"-"+description.value+"-"+category.value);
    let buttonEdit=document.createElement('button');
    buttonEdit.className='edit';
    let buttonDelete=document.createElement('button')
    buttonDelete.className='delete'
    buttonEdit.appendChild(document.createTextNode("EDIT"))
    buttonDelete.appendChild(document.createTextNode("DELETE"))

    li.appendChild(text)
    li.appendChild(text)
    li.appendChild(buttonEdit)
    li.appendChild(buttonDelete)
    ul.appendChild(li) 
}



// let buttonEdit=document.createElement('button');
// buttonEdit.className='edit';
// let buttonDelete=document.createElement('button')
// buttonDelete.className='delete'
// buttonEdit.appendChild(document.createTextNode("EDIT"))
// buttonDelete.appendChild(document.createTextNode("DELETE"))
// let li = document.createElement('li');

// if(arrayLocal.length!=0){
//     let text =document.createTextNode(localStorage.getItem(0)+"-"+localStorage.getItem("desl")+"-"+localStorage.getItem("catl"))
//     li.appendChild(text)
//     li.appendChild(buttonEdit)
//     li.appendChild(buttonDelete)
//     ul.appendChild(li)
// }



function onedit(e){
    if(e.target.classList.contains('edit')){
        if(confirm("Are you want to edit")){
            let rem = e.target.parentElement;
            ul.removeChild(rem);
            // expense.value=localStorage.getItem("exl")
            // description.value=localStorage.getItem("desl")
            // category.value=localStorage.getItem("catl")
            // localStorage.removeItem("exl")
            // localStorage.removeItem("desl")
            // localStorage.removeItem("catl")
        }
    }
}
function ondelete(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you want to delete")){
            let rem = e.target.parentElement;
            ul.removeChild(rem);
            localStorage.removeItem("exl")
            localStorage.removeItem("desl")
            localStorage.removeItem("catl")
        }
    }
}



