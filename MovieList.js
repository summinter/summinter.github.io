var dic = {}
function onClickAddMovie() {
    let title = document.querySelector('form input[name="title"]').value;
    let duration = document.querySelector('form input[name="duration"]').value;
    let price = document.querySelector('form input[name="price"]').value;
    let year = document.querySelector('form select[id="year"]').value;
    let month = document.querySelector('form select[id="month"]').value;
    let day = document.querySelector('form select[id="day"]').value;
    let type = document.forms[0]["type"].value;
    if (title in dic && dic[title] != type){
        alert("Other type of this movie is already existed");
        return false;
    }
    dic[title] = type;
    if (validateInput(duration,price,year,month,day)) {
        addRow();
    }
}

function setMinute() {
    let minute = document.getElementById("minute");
    minute.innerHTML = "";
    minute.options.add(new Option("--", null));
    for (let i = 0; i <= 59; i++) {
        if (i < 10){
            i = "0" + i;
        }
        minute.options.add(new Option(i,i));
    }
}

function addRow() {
    let bodyObj = document.getElementById("tbody");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }
    let hour = document.getElementById("hour").value;
    let minute = document.getElementById("minute").value;
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    let rowCount = bodyObj.rows.length;
    let cellCount = bodyObj.rows[0].cells.length;
    bodyObj.style.display = ""; // display the tbody
    let newRow = bodyObj.insertRow(rowCount++);
    newRow.insertCell(0).innerHTML = document.forms[0]["title"].value;
    newRow.insertCell(1).innerHTML = year + "/" + month + "/" + day;
    newRow.insertCell(2).innerHTML = hour + ":" + minute;
    newRow.insertCell(3).innerHTML = document.forms[0]["duration"].value;
    newRow.insertCell(4).innerHTML = document.forms[0]["movieHall"].value;
    num = parseFloat(document.forms[0]["price"].value).toFixed(1)
    newRow.insertCell(5).innerHTML = num;
    newRow.insertCell(6).innerHTML = document.forms[0]["type"].value;
    newRow.insertCell(7).innerHTML = bodyObj.rows[0].cells[cellCount -
    1].innerHTML; // copy the "delete" button
    bodyObj.rows[0].style.display = "none"; // hide first row
}
function removeRow(inputobj) {
    if (!inputobj) return;
    let parentTD = inputobj.parentNode;
    let parentTR = parentTD.parentNode;
    let parentTBODY = parentTR.parentNode;
    parentTBODY.removeChild(parentTR);
}

function initial() {
    let year = document.getElementById("year");
    year.innerHTML = "";
    year.options.add(new Option("--", null));
    for (let i = 2020; i <= 2030; i++) {
        year.options.add(new Option(i, i));
    }
    let movieHall = document.getElementById("movieHall");
    movieHall.innerHTML = "";
    movieHall.options.add(new Option("--", null));
    for (let i = 1; i <= 7; i++) {
        movieHall.options.add(new Option(i, i));
    }
    let hour = document.getElementById("hour");
    hour.innerHTML = "";
    hour.options.add(new Option("--", null));
    for (let i = 0; i <= 23; i++) {
        if (i < 10){
            i = "0" + i;
        }
        hour.options.add(new Option(i,i));
    }


}
function setMonth() {
    let month = document.getElementById("month");
    month.innerHTML = "";
    month.options.add(new Option("--", null));
    for (let i = 1; i <= 12; i++) {
        month.options.add(new Option(i, i));
    }
}
function setDay() {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day");
    let data = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// clear the items
    day.innerHTML = "";
// add new items
    day.options.add(new Option("--", null));
    for (let i = 1; i <= data[month - 1]; i++) {
        day.options.add(new Option(i, i));
    }
    if (((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && month ===
        2) {
        day.options.add(new Option(29, 29));
    }
}
function validateInput(duration,price,year, month,day) {
    if (duration < 30 || duration >300) {
        alert("Invalid duration");
        return false;
    }
    if (price <= 0) {
        alert("Price should be positive");
        return false;
    }
    var today = new Date();
    var dd = parseInt(String(today.getDate()).padStart(2, '0'));
    var mm = parseInt(String(today.getMonth() + 1).padStart(2, '0')); //January is 0!
    var yyyy = parseInt(today.getFullYear());
    // if ((year < yyyy) || (year >= yyyy && month < mm) || (year >= yyyy && month >= mm && day < dd)) {
    if ((parseInt(year) < yyyy) || (parseInt(year) == yyyy && parseInt(month) < mm) || (parseInt(year) == yyyy && parseInt(month) == mm && parseInt(day) < dd)) {
        alert("The date should be after current date");
        return false;
    }
    return true;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}