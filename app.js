let tableBtn = document.querySelectorAll('.tableBtn')
let deleteIcon = document.querySelectorAll('.cross')
let  addBtn = document.querySelector('#add')
let inputForm = document.querySelector('.inputBookForm')
let tbody = document.querySelector('tbody')


let tableData = document.createElement('td')

//problems
//for loop running more than once
//2.delete(cross) button is not working of js injected code
    //2(a) delete button should also delete from myLibrary
//3. fields are required(but not working)
    //3(a). No. of pages should be a number
//4. ReadOrNot button is not working

  deleteIcon.forEach((Icon) => Icon.addEventListener('click',() =>{
    //remove sinle row for which cross-icon is clicked
    console.log(Icon.parentElement.title)
    Icon.parentElement.remove()
  }))




tableBtn.forEach(Btn => Btn.addEventListener('click',() => {
  if (Btn.textContent == "Read"){
    Btn.textContent = "Not Read"
    Btn.style.backgroundColor = "crimson"
    Btn.style.color = "white"
  }else{
    Btn.textContent = "Read"
    Btn.style.backgroundColor = "lightgreen"
    Btn.style.color = "black"
  }
}))



let myLibrary = [
  //   {
  //     title:"",
  //     author:"",
  //     pages:0,
  //     readOrNot:""
  // },
  // {
  //     title:"Fairy tale",
  //     author:"Igor Safranov",
  //     pages:89,
  //     readOrNot:"Read"
  // },
  //   {
  //     title:"Fairy tale",
  //     author:"You",
  //     pages:896,
  //     readOrNot:"Not Read"
  // },
];

function Book(title,author,pages,readOrNot) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readOrNot = readOrNot;
}

// let bookInMyLibrary = true;

function addBookToLibrary(title,author,pages,readOrNot) {
  const book = new Book(title,author,pages,readOrNot)
  // bookExists(title)
  myLibrary.push(book)
  
}

// function removeBookFromLibrary(book) {
//     //remove that book for which cross-icon is clicked from the mylibrary
//   }


function handleAddBtn(e){
  e.preventDefault();
  console.log(myLibrary)
  addBookToLibrary(inputForm[0].value,inputForm[1].value,+inputForm[2].value,inputForm[3].value)
  inputForm.reset()
  addObjToScreen()

}


// function bookExists(bookTitle){
//   for(let i=0;i<myLibrary.length;i++){
//     if(myLibrary[i].title === bookTitle){
//       bookInMyLibrary = true
//       console.log(bookTitle + " in myLibrary")
//     }else{
//       bookInMyLibrary = false
//       console.log(bookTitle + " not in myLibrary")
//     }
//   }
// }



// const table;

function addObjToScreen(){
  tbody.innerHTML = ""
    // console.log(myLibrary)
      for(let i=0;i<myLibrary.length ;i++){
          const tabledata =`<tr>
                   <td> ${myLibrary[i].title} </td>
                   <td> ${myLibrary[i].author} </td>
                   <td> ${myLibrary[i].pages} </td>
                   <td> <button class='tableBtn'> ${myLibrary[i].readOrNot} </button> </td>
                   <td class='cross'>&#10006</td>
                   </tr>`;
                   tbody.insertAdjacentHTML('afterbegin',tabledata);
      }
      console.log(myLibrary.length)
      console.log(myLibrary)
    }






addObjToScreen()
 addBtn.addEventListener('click',handleAddBtn)
