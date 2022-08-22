proffesions = ["Programmer", "Web developer", "Designer", "Student"]
proffesion = document.querySelector("#proffesion")

function who_i_am() {
    inner = proffesion.innerHTML;
    proffesion.innerHTML = "|" + inner;

}

who_i_am()