//importamos///
import Button from "./components/button.js";
import Input from "./components/input.js";


///datos/////
let mySuperArrayofStrings = ["Login", "Signup", "Reset", "Cancel"];
let inputArray = ["Username", "Surname", "E-mail", "Password"];
let inputArrayFiltered = inputArray.filter( element => element=="Username");



///funciones////
function RenderButton(text) {
    let myButton = new Button("app", text);
    myButton.render();
}

function RenderInput(type) {

    let input_type = "none"

    switch (type) {
        case "Password":
            input_type = "password"
            break;
        case "E-mail":
            input_type = "email";
            break;
        default:
            input_type = "text"
            break;
    }

    let myInput = new Input("app", input_type);
    myInput.render();
}


///////////////////////////
mySuperArrayofStrings.forEach(element => {
    RenderButton(element)
});

// Defino una funcion con el nombre que quiero..
function MySuperFuncion(x, y, z) {

}

MySuperFuncion();// Invocamos...

// Puede asignar a una constante una funcion que NO tiene nombre
const MySuperFuncionDefinida = function () {

}

MySuperFuncionDefinida();

// definir funciones asignando otras..
const MySegundaSuperFuncion = MySuperFuncion;

/// Otro tipo de funcion anonima
const MySuperFuncionSiNombre = (x) => {
    return x + 1
}


const MySuperArrowFunction = x => x + 1




inputArrayFiltered.forEach(function (element) {
    RenderInput(element);
});