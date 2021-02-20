
let addBtn = document.querySelector("#add");
let inputForm = document.querySelector(".inputBookForm");
let tbody = document.querySelector("tbody");

let tableData = document.createElement("td");

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

function Book(title, author, pages, readOrNot) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readOrNot = readOrNot;
}

function addBookToLibrary(title, author, pages, readOrNot) {
	const book = new Book(title, author, pages, readOrNot);
	myLibrary.push(book);
}

function handleAddBtn(e) {
	addBookToLibrary(
		inputForm[0].value,
		inputForm[1].value,
		+inputForm[2].value,
		inputForm[3].value
	);
	console.log(myLibrary);
	inputForm.reset();
	addObjToScreen();
	e.preventDefault();
}

function addObjToScreen() {
	tbody.innerHTML = "";
	for (let i = 0; i < myLibrary.length; i++) {
		const tabledata = `<tr>
                   <td> ${myLibrary[i].title} </td>
                   <td> ${myLibrary[i].author} </td>
                   <td> ${myLibrary[i].pages} </td>
                   <td> <button class='tableBtn'> ${myLibrary[i].readOrNot} </button> </td>
                   <td class='cross'>&#10006</td>
                   </tr>`;
		tbody.insertAdjacentHTML("afterbegin", tabledata);
	}
	let tableBtn = document.querySelectorAll(".tableBtn");
	let deleteIcon = document.querySelectorAll(".cross");
	// console.log(deleteIcon)
	tableBtn.forEach((Btn) =>
		Btn.addEventListener("click", () => {
			if (Btn.textContent == "Read") {
				Btn.textContent = "Not Read";
				Btn.style.backgroundColor = "crimson";
				Btn.style.color = "white";
			} else {
				Btn.textContent = "Read";
				Btn.style.backgroundColor = "lightgreen";
				Btn.style.color = "black";
			}
		})
	);

	function deleteBook(currentBook) {
		myLibrary = myLibrary.splice(currentBook, currentBook + 1);
	}

	function findBook(libraryArray, name) {
		if (libraryArray.length === 0 || libraryArray === null) {
			return;
		}
		for (book of libraryArray)
			if (book.name === name) {
				return libraryArray.indexOf(book);
			}
	}

	deleteIcon.forEach((Icon) =>
		Icon.addEventListener("click", () => {
			const deletedBook = Icon.parentElement.firstElementChild.textContent;
			if (confirm(`are you sure you want to delete ${deletedBook}`)) {
				deleteBook(findBook(myLibrary, deletedBook));
				Icon.parentElement.remove();
			}
		})
	);
}

addObjToScreen();
inputForm.addEventListener("submit", handleAddBtn);
