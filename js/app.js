///////////////////////////////
/// Importar funciones o clases
import Button from "./components/button.js";
import Input from "./components/input.js";
import Video from "./components/video.js";

/////////////////////////////////////////////
//// datos
let mySuperArrayofStrings = ["Login", "Signup", "Reset", "Cancel"];
let inputArray = ["Username", "Surname", "E-mail", "Password"];
let inputArrayFiltered = inputArray.filter( element => element=="Password");
///////////////////////////////////////////


//////////////////////////////////////////////
// Funciones
//////////////////////////////////////////
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
////////////////////////////////////
////////////////////////////////////
// Logica de App
mySuperArrayofStrings.forEach(element => {
    RenderButton(element)
});

inputArrayFiltered.forEach(function (element) {
    RenderInput(element);
});

let myVideo= new Video("videoID","https://liendo.s3.sa-east-1.amazonaws.com/Pel%C3%ADculas+y+TV+2022-07-19+23-13-37_Trim.mp4",400,300, "video/mp4")
myVideo.render()