const formPage1 = document.getElementById("form-page1");
const formPage2 = document.getElementById("form-page2");
const formPage3 = document.getElementById("form-page3");
const formPage4 = document.getElementById("form-page4");

const progressBar = document.querySelector("progress");

const formData = document.getElementById("collected-data");

const formCard = document.getElementById("form-input-card");
const summaryCard = document.getElementById("form-summary-card");

summaryCard.style.display = "none";


/* --------------------------------------------------------- */

function showPage(pageNumber) {
    switch(pageNumber) {
        case 1:
            formPage1.style.display = "block";
            formPage2.style.display = "none";
            formPage3.style.display = "none";
            formPage4.style.display = "none";
            progressBar.value = 25;
            break;
        case 2:
            formPage1.style.display = "none";
            formPage2.style.display = "block";
            formPage3.style.display = "none";
            formPage4.style.display = "none";
            progressBar.value = 50;
            break;
        case 3:
            formPage1.style.display = "none";
            formPage2.style.display = "none";
            formPage3.style.display = "block";
            formPage4.style.display = "none";
            progressBar.value = 75;
            break;
        case 4:
            formPage1.style.display = "none";
            formPage2.style.display = "none";
            formPage3.style.display = "none";
            formPage4.style.display = "block";
            progressBar.value = 100;
            submitData();
            break;
        default:
            break;
    }
}

/* --------------------------------------------------------- */

function getFormData() {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const teamSize = document.getElementById("team-size").value;
    const skills = document.querySelectorAll("input[name:skills]=checked");

    return data = {
        name: name,
        dob: dob,
        email: email,
        teamSize: teamSize,
        skills: skills.value + ", " 
    };
}


function submitData() {
    const dataRow = document.createElement("tr");
    const cellName = document.createElement("td");
    const cellDob = document.createElement("td");
    const cellEmail = document.createElement("td");
    const cellTeamsize = document.createElement("td");
    const cellSkills = document.createElement("td");

    dataRow.appendChild(cellName);
    dataRow.appendChild(cellDob);
    dataRow.appendChild(cellEmail);
    dataRow.appendChild(cellTeamsize);
    dataRow.appendChild(cellSkills);

    const data = getFormData();

    cellName.innerHTML = data.name;
    cellDob.innerHTML = data.dob;
    cellEmail.innerHTML = data.email;
    cellTeamsize.innerHTML = data.teamSize;
    cellSkills.innerHTML = data.skills;

    formCard.style.display = "none";
    summaryCard.style.display = "block";
}
