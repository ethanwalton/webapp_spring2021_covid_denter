function updateCountryView() {
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if (ddCountry.value == "Yes") {
        divCountry.classList.remove("invisible");
    }
    else {
        divCountry.classList.add("invisible");
    }

}

function validateForm() {

    var DoB = document.querySelector("#txtDOB");
    var divDoBError = document.querySelector("#divDoBError")
    var formIsValid = true;
    if (DoB.value == "") {
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The Date of Birth can not be empty"
        DoB.classList.add("hasError");
        formIsValid = false;
    }
    else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if (DoBDate >= todayDate) {
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "Date of Birth must be before today's date."
            DoB.classList.add("hasError");
            formIsValid = false;
        }
        else {
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = ""
            DoB.classList.remove("hasError");

        }
    }

    //check 2
    var ddCountry = document.querySelector("#ddCountry");
    if (ddCountry.value == "Yes") {
        var txtCountry = document.querySelector("#txtCountry");
        if (txtCountry.value == "") {
            document.querySelector("#divCountryError").classList.remove("invisible");
            txtCountry.classList.add("hasError");
            formIsValid = false;
        }
        else {
            document.querySelector("#divCountryError").classList.remove("invisible");
            txtCountry.classList.add("hasError");
        }
    }

    var elements = document.getElementsByTagName("input")
    var invalidChars = ['#', '!', '~','&','"', '`','<','>'];
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < invalidChars.length; j++) {
            if (elements[i].value.indexOf(invalidChars[j]) != -1) {
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
        }
    }


    return formIsValid;
}