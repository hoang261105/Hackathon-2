let heroInfo = [];
heroInfo.push(JSON.parse(localStorage.getItem("heroInfo")));

var imgElement = document.getElementById("imgURL");
var nameElement = document.getElementById("name");
var jobElement = document.getElementById("job");

imgElement.src = heroInfo[0].imgUrl;
nameElement.textContent = "Hi, I'm " + heroInfo[0].name;
jobElement.innerHTML = "I'm a " + heroInfo[0].job;

let personalDetails = []
personalDetails.push(JSON.parse(localStorage.getItem("personalDetail")))

let dateOfBirth = document.getElementById("dateOfBirth")
let languages = document.getElementById("languages")
let nationality = document.getElementById("nationality")
let interest = document.getElementById("interest")
function render(){
    dateOfBirth.textContent = personalDetails[0].dob
    nationality.textContent = personalDetails[0].nationality
    languages.textContent = personalDetails[0].spokenLanguages.join(" - ")
    interest.textContent = personalDetails[0].interest.join(", ")
}
render();



