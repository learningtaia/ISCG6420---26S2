let users = [];

function submitForm() {
    let form = document.getElementById("user-form");

    let fname = form["first-name"].value;
    let lname = form["last-name"].value;

    const user = {
        firstname: fname, 
        lastname: lname
    }

    users.push(user);
    loadUsers();
}

function loadUsers() {
    let userList = document.getElementById("user-list");
    userList.innerHTML = "";

    for (let i = 0; i < users.length; i++) {
        let userDiv = document.createElement("div");

        userDiv.classList.add("user");

        let userFullName = users[i].firstname + " " + users[i].lastname;

        userDiv.innerHTML = userFullName;

        userList.appendChild(userDiv);
    }
}

let btn = document.getElementById("user-form-submit");
console.log("btn variable is " + btn);
btn.addEventListener("click", submitForm);

// let
// const
// var