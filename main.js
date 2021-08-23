const inputFirstName = document.getElementById("inputFirstName");
const inputLastName = document.getElementById("inputLastName");
const inputYearBirth = document.getElementById("inputYearBirth");
const inputID = document.getElementById("inputID");
const inputCity = document.getElementById("inputCity");
const buttonInput = document.getElementById("buttonInput");
const divOfInfo = document.getElementById("divOfInfo");

const objectOfPeople = [];

// הוסף באופן אוטומטי  תאריך בדיקה, שעת בדיקה (אובייקט של DATE) לאובייקט.
buttonInput.onclick = function () {
  var counter = 0;
  var objectOfPeopleInput = {
    name: inputFirstName.value,
    lastName: inputLastName.value,
    yearBirth: inputYearBirth.value,
    id: inputID.value,
    city: inputCity.value,
    dateOfExam: Date(),
  };
  for (let i = 0; i < objectOfPeople.length; i++) {
    if (objectOfPeople[i].id == inputID.value) {
      alert("הקלדת תז שמופיע במערכת כבר");
      counter++;
    }
  }
  if (counter == 0) {
    objectOfPeople.push(objectOfPeopleInput);
    console.log(objectOfPeople);
    divOfInfo.innerHTML += `<table>
    <tr>
    <th>שם מלא: </th><th>שנת לידה: </th><th>מספר ת.ז: </th><th>עיר מגורים: </th><th>,תאריך שבוצעה הבדיקה: </th>
    </tr></table>
    <tr>
    <table><td>${objectOfPeopleInput.name + " " + objectOfPeopleInput.lastName}</td><td>${objectOfPeopleInput.yearBirth}</td><td>${objectOfPeopleInput.id}</td><td>${objectOfPeopleInput.city}</td><td>${objectOfPeopleInput.dateOfExam}</td>
    </tr></table>`
  }
};

inputFirstName.oninput = function () {
  inputFirstName.value = inputFirstName.value.toUpperCase();
};

inputLastName.oninput = function () {
  inputLastName.value = inputLastName.value.toUpperCase();
};

inputCity.oninput = function () {
  inputCity.value = inputCity.value.toUpperCase();
};

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchPara=document.getElementById("searchPara");

searchButton.onclick = function () {
  for (let i = 0; i < objectOfPeople.length; i++)
    if (objectOfPeople[i].name ==searchInput.value  ) {
        searchPara.innerHTML = "שם הפרטי שמילאת קיים תחת ת.ז : "+objectOfPeople[i].id ;
    }
   else{
        alert("שם עמית לא קיים במערכת")}
    
};

const searchInputID = document.getElementById("searchInputID");
const searchButtonID = document.getElementById("searchButtonID");

searchButtonID.onclick=function(){
    for (let i = 0; i < objectOfPeople.length; i++){
        if(objectOfPeople[i].id == searchInputID.value ){
            document.getElementById("searchParaID").innerHTML="מספר ת.ז שחיפשת מופיע תחת שם: " + objectOfPeople[i].name +""+ objectOfPeople[i].lastName;

        }
        else{
            alert("מספר ת.ז לא קיים במערכת")}
        
    }
    }
    
