// Inputs
var txtnome = document.getElementById("nome");
var txtsobreno = document.getElementById("sobreno");

var txtemail = document.getElementById("email");

var txttel = document.getElementById("telefone")

var button = document.getElementById("button")

// Event Listner
txtnome.addEventListener("mouseenter", nome_enter);
txtnome.addEventListener("mouseout", nome_exit);

txtsobreno.addEventListener("mouseenter", sobreno_enter);
txtsobreno.addEventListener("mouseout", sobreno_exit);

txtemail.addEventListener("mouseenter", email_enter);
txtemail.addEventListener("mouseout", email_exit);

txttel.addEventListener("mouseenter", tel_enter);
txttel.addEventListener("mouseout", tel_exit);

button.addEventListener("mouseenter", button_enter);
button.addEventListener("mouseout", button_exit);
button.addEventListener("click", button_click);

// Functions DOOM
function nome_enter() {
    txtnome.style.backgroundColor = "#C0C0C0"
}
function nome_exit() {
    txtnome.style.backgroundColor = "#d3d3d3";
}

function sobreno_enter() {
    txtsobreno.style.backgroundColor = "#C0C0C0";
}
function sobreno_exit() {
    txtsobreno.style.backgroundColor = "#d3d3d3";
}

function email_enter() {
    txtemail.style.backgroundColor = "#C0C0C0";
}
function email_exit() {
    txtemail.style.backgroundColor = "#d3d3d3";
}

function tel_enter() {
    txttel.style.backgroundColor = "#C0C0C0";
}
function tel_exit() {
    txttel.style.backgroundColor = "#d3d3d3";
}

function button_enter() {
    button.style.backgroundColor = "#C0C0C0";
}
function button_exit() {
    button.style.backgroundColor = "#d3d3d3";
}
