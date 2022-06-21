var i, checkboxes = document.querySelectorAll(".EQUIP-check");

function save() {
    for (i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
    }
    const btnCollection = document.getElementsByClassName("savebtn");
    for (let i = 0; i < btnCollection.length; i++) {
        btnCollection[i].textContent = "Saved!";
    }
    //document.getElementsByClassName("#savebtn").textContent = "Tallennettu!";
    setTimeout(timeOut, 3000);
}

function timeOut() {
    const btnCollection = document.getElementsByClassName("savebtn");
    for (let i = 0; i < btnCollection.length; i++) {
        btnCollection[i].textContent = "Save";
    }
}

function load_() {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true' ? true:false;
    }
}