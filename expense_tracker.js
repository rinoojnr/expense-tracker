var expense = document.getElementById('expense');
var description = document.getElementById('description');
var category = document.getElementById('category');
var index = document.getElementById('index')

var submit = document.getElementById('submit');
var li = document.createElement('li');
var ul = document.getElementById('list');
// for(x in localStorage){
//     // let li = document.createElement('li');
//     // let text1 = document.createTextNode(localStorage.getItem(key));
//     console.log(localStorage[x].key)
// }
for (var i = 0; i < localStorage.length; i++){
    let text1 = localStorage.getItem(localStorage.key(i));
    let covStr = JSON.parse(text1)
    // let text2 = covStr.exl;
    // let text3 = covStr.desl;
    // let text4 = covStr.catl;
    let text2 = document.createTextNode(covStr.exl);
    let text3 = document.createTextNode("--");
    let text4 = document.createTextNode(covStr.desl);
    let text5 = document.createTextNode("--");
    let text6 = document.createTextNode(covStr.catl);
    let li = document.createElement('li');
    li.appendChild(text2);
    li.appendChild(text3);
    li.appendChild(text4);
    li.appendChild(text5);
    li.appendChild(text6);
    let editButton =document.createElement('button');
    editButton.className = 'edit';
    editButton.appendChild(document.createTextNode("EDIT"));
    let deleteButton =document.createElement('button');
    deleteButton.appendChild(document.createTextNode("DELETE"))
    deleteButton.className='delete';
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);
}


submit.addEventListener('click',afterSubmit);
ul.addEventListener('click',afterDelete);
ul.addEventListener('click',afterEdit);
//show

// let arr ={"exl":expense.value,"desl":description.value,"catl":category.value}
// let strArr =JSON.stringify(arr)
// localStorage.setItem(index.value,strArr)
// let text1 =document.createTextNode(expense.value)
// let text2 = document.createTextNode(description.value);
// let text3 = document.createTextNode(category.value,);
// let text4 = document.createTextNode("--");
// let text5 = document.createTextNode("--")
// li.appendChild(text1);
// li.appendChild(text4);
// li.appendChild(text2);
// li.appendChild(text5);
// li.appendChild(text3);

//submit
function afterSubmit(e){
    e.preventDefault()
    //creating li
    let li = document.createElement('li');
    let arr ={"exl":expense.value,"desl":description.value,"catl":category.value}
    let strArr =JSON.stringify(arr)
    localStorage.setItem(index.value,strArr)
    let text1 = document.createTextNode(expense.value);
    let text2 = document.createTextNode(description.value);
    let text3 = document.createTextNode(category.value);
    let text4 = document.createTextNode("--");
    let text5 = document.createTextNode("--")
    li.appendChild(text1);
    li.appendChild(text4);
    li.appendChild(text2);
    li.appendChild(text5);
    li.appendChild(text3);
    //creating buttons
    let editButton =document.createElement('button');
    editButton.className = 'edit';
    editButton.appendChild(document.createTextNode("EDIT"));
    let deleteButton =document.createElement('button');
    deleteButton.appendChild(document.createTextNode("DELETE"))
    deleteButton.className='delete';
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);

}

//delete
function afterDelete(e){
    if(e.target.classList.contains('delete')){
        if(confirm("are you want to delete")){
            let rem = e.target.parentElement;
            console.log(index.value)
            localStorage.removeItem(index.value)
            ul.removeChild(rem);
            
        }
    }
}

//edit
function afterEdit(e){
    if(e.target.classList.contains('edit')){
        if(confirm("are you want to edit")){
            let rem = e.target.parentElement;
            ul.removeChild(rem);
            // console.log(rem.childNodes[0]);
            expense.value = rem.childNodes[0].textContent;
            description.value = rem.childNodes[2].textContent;
            category.value = rem.childNodes[4].textContent;
            // description.value = rem.childNodes[0].textContent
            // ul.removeChild(rem);
            
        }
    }
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// const newArr = []

// var expense = document.getElementById('expense');
// var description = document.getElementById('description');
// var category = document.getElementById('category');
// var index = document.getElementById('index')

// var submit = document.getElementById('submit');
// var li = document.createElement('li');
// var ul = document.getElementById('list');
 
// // for (var i = 0; i < localStorage.length; i++){
// //     let text1 = localStorage.getItem(localStorage.key(i));
// //     let covStr = JSON.parse(text1)
// //     // let text2 = covStr.exl;
// //     // let text3 = covStr.desl;
// //     // let text4 = covStr.catl;
// //     let text2 = document.createTextNode(covStr.exl);
// //     let text3 = document.createTextNode("--");
// //     let text4 = document.createTextNode(covStr.desl);
// //     let text5 = document.createTextNode("--");
// //     let text6 = document.createTextNode(covStr.catl);
// //     let li = document.createElement('li');
// //     li.appendChild(text2);
// //     li.appendChild(text3);
// //     li.appendChild(text4);
// //     li.appendChild(text5);
// //     li.appendChild(text6);
// //     let editButton =document.createElement('button');
// //     editButton.className = 'edit';
// //     editButton.appendChild(document.createTextNode("EDIT"));
// //     let deleteButton =document.createElement('button');
// //     deleteButton.appendChild(document.createTextNode("DELETE"))
// //     deleteButton.className='delete';
// //     li.appendChild(editButton);
// //     li.appendChild(deleteButton);
// //     ul.appendChild(li);
// // }

// let dataFromLocalStorage = localStorage.getItem("data")
// console.log(dataFromLocalStorage)
// dataFromLocalStorage = JSON.parse(dataFromLocalStorage)
// let text1 = localStorage.getItem(localStorage.key);
// let covStr = JSON.parse(text1)
// dataFromLocalStorage.map((data) => {
//     let amount = document.createTextNode(data.amount);
//     let description = document.createTextNode(data.description);
//     let category = document.createTextNode(data.category);
//     let text3 = document.createTextNode("--");;

//     li.appendChild(amount);
//     li.appendChild(text3);
//     li.appendChild(description);
//     li.appendChild(text3);
//     li.appendChild(category);
//     ul.appendChild(li)
//     li.appendChild(text3);
// })


// submit.addEventListener('click',afterSubmit);
// ul.addEventListener('click',afterDelete);
// ul.addEventListener('click',afterEdit);
// //show

// // let arr ={"exl":expense.value,"desl":description.value,"catl":category.value}
// // let strArr =JSON.stringify(arr)
// // localStorage.setItem(index.value,strArr)
// // let text1 =document.createTextNode(expense.value)
// // let text2 = document.createTextNode(description.value);
// // let text3 = document.createTextNode(category.value,);
// // let text4 = document.createTextNode("--");
// // let text5 = document.createTextNode("--")
// // li.appendChild(text1);
// // li.appendChild(text4);
// // li.appendChild(text2);
// // li.appendChild(text5);
// // li.appendChild(text3);

// //submit

// function afterSubmit(e){
//     let dataFromLocalStorage = localStorage.getItem("data")
//     if(dataFromLocalStorage != null) {
//         dataFromLocalStorage = JSON.parse(dataFromLocalStorage)
//         dataFromLocalStorage.map((data) => {
//             newArr.push(data);
//         })
//     }
//     e.preventDefault()
//     //creating li
//     let li = document.createElement('li');
//     // let arr ={"exl":expense.value,"desl":description.value,"catl":category.value}

//     let data = {
//         amount: expense.value,
//         description: description.value,
//         category: category.value,
//     }

//     newArr.push(data)
//     console.log(newArr)
//     let strArr =JSON.stringify(newArr)
//     localStorage.setItem("data",strArr)




//     // let text1 = document.createTextNode(expense.value);
//     // let text2 = document.createTextNode(description.value);
//     // let text3 = document.createTextNode(category.value);
//     // let text4 = document.createTextNode("--");
//     // let text5 = document.createTextNode("--")
//     // li.appendChild(text1);
//     // li.appendChild(text4);
//     // li.appendChild(text2);
//     // li.appendChild(text5);
//     // li.appendChild(text3);
//     // //creating buttons
//     // let editButton =document.createElement('button');
//     // editButton.className = 'edit';
//     // editButton.appendChild(document.createTextNode("EDIT"));
//     // let deleteButton =document.createElement('button');
//     // deleteButton.appendChild(document.createTextNode("DELETE"))
//     // deleteButton.className='delete';
//     // li.appendChild(editButton);
//     // li.appendChild(deleteButton);
//     // ul.appendChild(li);

// }

// //delete
// function afterDelete(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm("are you want to delete")){
//             let rem = e.target.parentElement;
//             console.log(index.value)
//             localStorage.removeItem(index.value)
//             ul.removeChild(rem);
            
//         }
//     }
// }

// //edit
// function afterEdit(e){
//     if(e.target.classList.contains('edit')){
//         if(confirm("are you want to edit")){
//             let rem = e.target.parentElement;
//             ul.removeChild(rem);
//             // console.log(rem.childNodes[0]);
//             expense.value = rem.childNodes[0].textContent;
//             description.value = rem.childNodes[2].textContent;
//             category.value = rem.childNodes[4].textContent;
//             // description.value = rem.childNodes[0].textContent
//             // ul.removeChild(rem);
            
//         }
//     }
// }



