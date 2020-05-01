let myLibrary = [];
let addBook = document.getElementById('addBook');
let hasRead = document.getElementById('hasRead');
const myTable = document.getElementById('myTable');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const newBook = document.getElementById('newBook');
const submit = document.getElementById('submit');


function Book (title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}


function addBookToLibrary (newBook) {
	newBook = Object.create(Book.prototype, {
		title: bookTitle,
		author: bookAuthor,
		pages: bookPages,
		read: hasRead
	});
	myLibrary.push(newBook);
}

function render() {
		table = myTable.insertRow();
		let row1 = table.insertCell(0);
		let row2 = table.insertCell(1);
		let row3 = table.insertCell(2);
		let row4 = table.insertCell(3);

		for(let i = 0; i < myLibrary.length; i++){
			table.classList = [i];
		}

		row1.innerHTML = bookTitle.value;
		row2.innerHTML = bookAuthor.value;
		row3.innerHTML = bookPages.value;
		row4.innerHTML = `<input type='button' id='read-input' value=${hasRead.checked ? 'Yes' : 'No'}><button id='delete' class=${table.classList}>Delete</button></td>`;
}

newBook.addEventListener('click', () => {
	addBook.style.display = 'block';
	bookTitle.value = '';
	bookAuthor.value = '';
	bookPages.value = '';
	hasRead.checked = false;
});

submit.addEventListener('click', e => {
	if(bookTitle.value === '' || bookAuthor.value === '' || bookPages.value === ''){
		alert('Please Complete Your Book Information!');
	} else {
		addBookToLibrary();
		render();
		addBook.style.display = 'none';
	}
});

myTable.addEventListener('click', e => {
	for(let i = 1; i < myTable.rows.length; i++){
		if(e.target.id === 'delete'){
			// Looks at immediate <td> of delete button (Read cell), followed by the parent element of that (entire row)
			e.target.parentElement.parentElement.remove();
			myLibrary.splice(e.target, 1);
		}
	}

	if(e.target.id === 'read-input'){
			if(hasRead.checked === true){
				hasRead.checked = false;
				e.target.value = 'No';
			} else {
				hasRead.checked = true;
				e.target.value = 'Yes';
			}
		}
});


