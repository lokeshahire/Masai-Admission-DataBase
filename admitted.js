// All the Code for the Admitted page goes here

let acceptedStudent = JSON.parse(localStorage.getItem("admission-accepted"));

displayTable(acceptedStudent);

function displayTable(acceptedStudent) {
  document.querySelector("tbody").innerHTML = "";
  acceptedStudent.forEach(function (elem) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = elem.name;

    let td2 = document.createElement("td");
    td2.innerHTML = elem.gender;

    let td3 = document.createElement("td");
    td3.innerHTML = elem.email;

    let td4 = document.createElement("td");
    td4.innerHTML = elem.phone;

    let td5 = document.createElement("td");
    td5.innerHTML = elem.course;

    tr.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(tr);
  });
}
