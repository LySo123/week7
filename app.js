const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const targetImage = document.querySelector(".garfield-image img");
let i = 1;

targetImage.addEventListener("click", () => { 

    targetImage.style.opacity = "0";

    setTimeout(() => {
        if (i === images.length) {
            i = 0;
        }

        targetImage.src = `images/` + images[i];
        i++;

        targetImage.style.opacity = "1";


    }, 500);


});

const fNameSpan = document.querySelector("#fName");
const lNameSpan = document.querySelector("#lName");
const fullNameSpan = document.querySelector("#fullName");
const ageSpan = document.querySelector("#age");
const emailSpan = document.querySelector("#email");
const skillsList = document.querySelector("#skills");
const subjectsList = document.querySelector("#subjects");

function fillList(list, items) {
  for (let j = 0; j < items.length; j++) {
    const li = document.createElement("li");
    li.textContent = items[j];
    list.appendChild(li);
  }
}

fetch("profile.json")
  .then((response) => response.json())
  .then((person) => {
    fNameSpan.textContent = person.fName;
    lNameSpan.textContent = person.lName;
    fullNameSpan.textContent = person.fName + " " + person.lName;
    ageSpan.textContent = person.age;
    emailSpan.textContent = person.email;

    fillList(skillsList, person.skills);
    fillList(subjectsList, person.subjects);
  })
  .catch((error) => console.error("Andmete laadimine ebaõnnestus:", error));