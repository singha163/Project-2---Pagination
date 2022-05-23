let currentPage = 1;
let numOfContactsonOnePage = 10;

// Array of contacts
let contacts = Array.from(document.getElementsByClassName('contact-item cf'));
let numOfContacts = contacts.length;

// Calculating number of pages
let numOfPages = Math.ceil(numOfContacts/numOfContactsonOnePage);

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
    // Hiding all contacts initially if index = 0
    for (let i=index; i<numOfContacts;i++) {
        contacts[i].style.display = "none";
    }
}

// Initially only showing first 10 contacts and hiding rest
hideAllContacts(numOfContactsonOnePage);   

// Function that implements pagination
function paginate(e) {
    let pageNum = e.target.innerHTML;

    // Displaying elements based on page number
    let firstContact = numOfContactsonOnePage*(+pageNum-1);
    let lastContact;
    // adjusting for Last Page
    if (numOfContacts < firstContact+numOfContactsonOnePage) {
        lastContact=numOfContacts;
    } else {
        lastContact= firstContact+numOfContactsonOnePage;
    }

    // Hiding All contacts
    hideAllContacts();

    // Displaying contacts based on current Page number
    for (let i=firstContact;i<lastContact;i++) {
        contacts[i].style.display = "block";
    }

    // Giving "active" class to active Page a
    pagination.children[currentPage-1].firstChild.classList.remove("active");
    currentPage = +pageNum;
    pagination.children[currentPage-1].firstChild.classList.add("active");
}
