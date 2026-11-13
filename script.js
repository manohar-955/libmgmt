
function addBook() {

    let book = document.getElementById("book").value;

    if (book == "") {
        alert("Please enter book name");
    }
    else {
        let li=document.createElement("li");
        li.innerHTML=book;
        document.getElementById("list").appendChild(li);

        alert("Book Added Successfully");
    }
}
