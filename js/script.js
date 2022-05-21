let currentPage = 1;
let contacts = Array.from(document.getElementsByClassName('contact-item cf'));
let numOfContacts = contacts.length;

let numOfPages = Math.ceil(numOfContacts/10);

let pagination = document.getElementById('pagination');


// Adding Page Buttons
for (let i=1; i<=numOfPages;i++) {
    // creating page li
    let li = document.createElement("li");

    // creating a
    let a = document.createElement("a");
        a.href = "#";
        a.innerHTML = i;
        a.onclick = paginate;

    // adding a as child element of li
    li.appendChild(a);
    

    // adding created li to pagination ul
    pagination.appendChild(li);
}


// Making first page active initially
pagination.children[currentPage-1].firstChild.classList.add("active");

function hideAllContacts(index=0) {
    // Hiding all contacts initially
    for (let i=index; i<numOfContacts;i++) {
        contacts[i].style.display = "none";
    }
}
hideAllContacts(11);   

function paginate(e) {
    let pageNum = e.target.innerHTML;

    // Displaying elements based on page number
    let firstPage = 10*(+pageNum-1);
    let lastPage;
    // adjusting for Last Page
    if (numOfContacts < firstPage+10) {
        lastPage=numOfContacts;
    } else {
        lastPage= firstPage+10;
    }
    hideAllContacts();
    for (let i=firstPage;i<firstPage+10;i++) {
        contacts[i].style.display = "block";
    }

    // Giving "active" class to active Page a
    pagination.children[currentPage-1].firstChild.classList.remove("active");
    currentPage = +pageNum;
    pagination.children[currentPage-1].firstChild.classList.add("active");
}