// seleção de elementos
const multiplicationForm = document.querySelector("#formas");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector(
    "#multiplication-operations"
);

// Multiplicação

// Funções

const mult = (number, multiplicatorNumber) =>{
    
    multiplicationTable.innerHTML = "";

    


    const result = number * multiplicatorNumber;

    const template = `<div class = "row">
        <div class = "operation"> ${number} x ${multiplicatorNumber} = </div>
        <div class = "result">${result}</div>
    </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
    
};

// Eventos

multiplicationForm.addEventListener("submit", (e)=>{
    e.preventDefault();


    const multiplicationNumber = numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;


    mult(multiplicationNumber, multiplicatorNumber);

});


// Adição


const adicao = document.querySelector("#formas1");

const adiction = (number, multiplicatorNumber) =>{
    
    multiplicationTable.innerHTML = "";

    


    const result = parseFloat(number)  + parseFloat(multiplicatorNumber) ;

    const template = `<div class = "row">
        <div class = "operation"> ${number} + ${multiplicatorNumber} = </div>
        <div class = "result">${result}</div>
    </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
    
};

// Eventos

adicao.addEventListener("submit",(e)=>{
    e.preventDefault();


    const multiplicationNumber = numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;


    adiction(multiplicationNumber, multiplicatorNumber);

});



// Subtração

const subtra = document.querySelector("#formas2");

const subtracao = (number, multiplicatorNumber) =>{
    
    multiplicationTable.innerHTML = "";

    


    const result = (number - multiplicatorNumber) ;

    const template = `<div class = "row">
        <div class = "operation"> ${number} - ${multiplicatorNumber} = </div>
        <div class = "result">${result}</div>
    </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
    
};

// Eventos

subtra.addEventListener("submit",(e)=>{
    e.preventDefault();


    const multiplicationNumber = numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;


    subtracao(multiplicationNumber, multiplicatorNumber);

});


// Divisão


const divi = document.querySelector("#formas3");

const divisao = (number, multiplicatorNumber) =>{
    
    multiplicationTable.innerHTML = "";

    


    const result = parseInt(number)  / parseInt(multiplicatorNumber) ;

    const template = `<div class = "row">
        <div class = "operation"> ${number} / ${multiplicatorNumber} = </div>
        <div class = "result">${result}</div>
    </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
    
};

// Eventos

divi.addEventListener("submit",(e)=>{
    e.preventDefault();


    const multiplicationNumber = numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;


    divisao(multiplicationNumber, multiplicatorNumber);

});