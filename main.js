const input = document.getElementById("input");
const operation = document.getElementById("operation");
const steps = document.getElementById("steps");
const btn = document.getElementById("btn");
const output = document.getElementById("output");
const copy = document.getElementById("copy");

function caesar(type) {
    const step = +steps.value;
    const oldString = input.value
    let newString = ''

    for (let i = 0; i < oldString.length; i++) {
        const numberLetter = oldString.charCodeAt(i)
        if (type == "encrypt") {
            newString += String.fromCharCode(numberLetter + step)
        } else {
            newString += String.fromCharCode(numberLetter - step)
        }
        
    }
    output.value = newString
}

btn.addEventListener("click", () => {
    caesar(operation.value)
});

copy.addEventListener("click", ()=> {
    navigator.clipboard.writeText(output.value).then(()=>{
        alert("Текст скопирован в буфер обмена")
    })
})
