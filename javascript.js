const addSkills = document.getElementById("add-button");
const generateButton = document.getElementById("generate");
const pfpInput = document.getElementById("pfp");
const endDateInput = document.getElementById("end-d");
const checkboxCheck = document.getElementById("check");
let profileImageUrl = "";
var skills = [];

pfpInput.addEventListener("change", function() {
    const file = pfpInput.files[0];
    if (file) {
        profileImageUrl = URL.createObjectURL(file);
    }
});

checkboxCheck.addEventListener('change', function() {
    if (checkboxCheck.checked) {
        endDateInput.value = 'Present';
        endDateInput.disabled = true;
    } else {
        endDateInput.value = '';
        endDateInput.disabled = false;
    }
});

function Skills() {
    var skillInput = document.getElementById("skill").value.trim();
    if (skillInput === "") {
        var errorMessage = document.getElementById("error-message");
        errorMessage.innerText = "Skill name cannot be empty.";
        setTimeout(function() {
            errorMessage.innerText = "";
        }, 3000);
        return;
    }
    skills.push(skillInput);
    var newInput = document.createElement("input");
    newInput.classList.add("input-style");
    newInput.id = "skill";
    newInput.placeholder = "Add Skill Name";

    newInput.addEventListener("keydown", function(press) {
        if (press.key === "Enter") {
            var added = document.createElement("div");
            skills.push(skillInput);
            document.getElementById("output-skill").appendChild(added);
            newInput.value = '';
        }
    });

    document.getElementById("div-skill").appendChild(newInput);
    document.getElementById("div-skill").removeChild(document.getElementById("skill"));

    var added = document.createElement("button");
    added.textContent = skillInput;
    document.getElementById("output-skill").appendChild(added);
}

addSkills.addEventListener("click", Skills);

function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const address = document.getElementById('address').value;
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const grad = document.getElementById('grad').value;
    const company = document.getElementById('company').value;
    const role = document.getElementById('role').value;
    const start_d = document.getElementById('start-d').value;
    const end_d = endDateInput.value;
    const but = newPage.document.getElementById("printl")

    var newPage = window.open("", "_blank");
    newPage.document.write("<html><head><title>Resume</title><link rel='stylesheet' href='style.css'></head><body>");

    newPage.document.write(
        `<main>
            <div class="container">
                <div class="content-align">
                    <div class="pinfo">
                        <img src="${profileImageUrl}" id="profileImage" alt="Profile Image">
                        <div class="info">
                            <h2 class="">${name}</h2>
                            <p class="p-light">${email}</p>
                            <p class="p-light">${number}</p>
                            <p class="p-light">${address}</p>
                        </div>
                    </div>
                    <div>
                        <h2 class="heading" >Education:</h2>
                        <h3>${school}</h3>
                        <p class="">${degree}</p>
                        <p class="p-light">${grad}</p>
                    </div>
                    <div>
                        <h2 class="heading">Experience:</h2>
                        <h3 >${company}</h3>
                        <p class="p-heading">${role}</p>
                        <p class="p-light">${start_d} to <span class="p-italic">${end_d}</span></p>
                    </div>
                    <div>
                        <h2 class="heading">Skills</h2>
                        <div>
                            ${skills.map(skill => `<button class="button-style-1">${skill}</button>`).join('')}
                        </div>        
                    </div>
                </div>
            </div>
            <div class="submit">
                <button onclick="window.print()" id="printl">Print Resume</button>
            </div>
        </main>`
        );
                
    newPage.document.write("</body></html>");
    newPage.document.close();
    setTimeout(() => {
        newPage.print();
    }, 2000);
}

generateButton.addEventListener("click", generateResume);