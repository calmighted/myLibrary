let tableBtn = document.querySelectorAll('.tableBtn')
let deleteIcon = document.querySelectorAll('.cross')
let  addBtn = document.querySelector('#add')
let inputForm = document.querySelector('.inputBookForm')
let tbody = document.querySelector('tbody')





let tableData = document.createElement('td')


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
  {
      title:"Hairy tale",
      author:"Me",
      pages:89,
      readOrNot:"read"
  },
    {
      title:"Fairy tale",
      author:"You",
      pages:896,
      readOrNot:"Not read"
  },
];

function Book(title,author,pages,readOrNot) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readOrNot = readOrNot;
}

function addBookToLibrary(title,author,pages,readOrNot) {
  const book = new Book(title,author,pages,readOrNot)
  myLibrary.push(book)
}

function removeBookFromLibrary(book) {
    //remove that book for which cross-icon is clicked from the mylibrary
  }


function handleAddBtn(e){
  e.preventDefault();
  addBookToLibrary(inputForm[0].value,inputForm[1].value,+inputForm[2].value,inputForm[3].value)
  inputForm.reset()
  // console.log(myLibrary)
  // add objects to the screen(table)
  addObjToScreen()

}

function addObjToScreen(){
    console.log(myLibrary)
}


 addBtn.addEventListener('click',handleAddBtn)

