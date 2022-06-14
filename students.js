// All the Code for All Students Page Goes Here
let admsnLS = JSON.parse(localStorage.getItem("admission"));

let AccstudntArr = JSON.parse(localStorage.getItem("admission-accepted")) || [];
let RejstudentArr =
  JSON.parse(localStorage.getItem("admission-rejected")) || [];

document.querySelector("#filter").addEventListener("change", handleFilter);

function handleFilter() {
  let selected = document.querySelector("#filter").value;
  //   console.log(selected);
  let fitlerList = admsnLS.filter(function (elem) {
    return elem.course == selected;

    // ALL FILTER NEEDED TO ADD
  });

  displayTable(fitlerList);
}
displayTable(admsnLS);

function displayTable(admsnLS) {
  document.querySelector("tbody").innerHTML = "";
  admsnLS.forEach(function (elem, index) {
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

    let td6 = document.createElement("td");
    td6.innerHTML = "Accepted";
    td6.style.backgroundColor = "green";
    td6.style.color = "white";
    td6.addEventListener("click", function () {
      accpetedFun(elem);
    });
    td6.addEventListener("click", function () {
      accdeletedata(index);
    });

    let td7 = document.createElement("td");
    td7.innerHTML = "Rejected";
    td7.style.backgroundColor = "red";
    td7.style.color = "white";
    td7.addEventListener("click", function () {
      rejectedFun(elem);
    });
    td7.addEventListener("click", function () {
      rejdeletedata(index);
    });

    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(tr);
  });
}
function accpetedFun(elem, index) {
  AccstudntArr.push(elem);

  localStorage.setItem("admission-accepted", JSON.stringify(AccstudntArr));

  AccstudntArr.splice(index, 1);
}
function rejectedFun(elem, index) {
  RejstudentArr.push(elem);
  localStorage.setItem("admission-rejected", JSON.stringify(RejstudentArr));
  RejstudentArr.splice(index, 1);
}
function accdeletedata(index) {
  admsnLS.splice(index, 1);
  localStorage.setItem("admission", JSON.stringify(admsnLS));
  window.location.reload();
}
function rejdeletedata(index) {
  admsnLS.splice(index, 1);
  localStorage.setItem("admission", JSON.stringify(admsnLS));
  window.location.reload();
}
