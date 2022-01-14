'use strict';


const section = document.querySelector('section');
const button = document.getElementById('button1');
const button1 = document.getElementById('button2');
const darkLight = document.getElementById('mode');
const changePara = document.getElementById('one');
const changeAnotherPara = document.getElementById('two');


// Dark and Light switch
darkLight.addEventListener('click', function turnDark() {
    let darkMode = false;
    darkLight.innerText = "Dark mode";
    if(darkMode == false){
    let element = document.body;
    element.classList.toggle('dark');
    darkMode == true;
    }
    if(darkMode = true){
        darkLight.innerText = "Light mode";
        let element = document.body;
        element.classList.toggle('light');


    }

})



button.onclick = function(){

    let input1 = parseInt(document.getElementById('input1').value);


if (isNaN(input1)) {

    changePara.innerText = "Invalid input, please enter a number";

}

 else {

    let newNum = (input1 + 32) * 1.8;
    changePara.innerText = `${newNum.toFixed()} C`;
}
}


button1.onclick = function(){

    let input2 = parseInt(document.getElementById('input2').value);


if (isNaN(input2)) {

    changeAnotherPara.innerText = "Invalid input, please enter a number";

}

 else {

    let newNum1 = (input2 - 32) / 1.8;
    changeAnotherPara.innerText = `${newNum1.toFixed()} F`;
}
}