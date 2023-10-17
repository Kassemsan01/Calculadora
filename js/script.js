// seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector(
    "#multiplication-operations"
);


// Funções

const createTable = (number, multiplicatorNumber) =>{
    
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


    createTable(multiplicationNumber, multiplicatorNumber);

});