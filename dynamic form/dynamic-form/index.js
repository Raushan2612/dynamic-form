const labelInputField = document.querySelector('#labelValue')//jo label wala yani dusare column ko 
const form = document.querySelector('#form')//ye jo naya content page par denge 
const inputType = document.querySelector('#inputType')//ye input type ko 

labelInputField.addEventListener('keyup', (event) => {
    const keyPressed = event.key
//key up means button has been pressed
//parameter key will tell which key has been pressed  

    if (keyPressed === "Enter") {
        // create inputs 
        const type = inputType.value //jo select kiya he (options me se)

        const label = labelInputField.value//jo bhi user ne type kiya he wo ye he

        const labelInput = document.createElement("label")//this create an additional html label
//jo bhi usane label me dala he use me form isert karte samay label bana dunga
        const div = document.createElement("div")// isliye banaya he taki div ke andar label or input type ko select kiya usko dal denge

        let input = null;
//suru me input ko null declare kiya he 
        if (type === 'textarea')
            input = document.createElement("textarea")
            // agar input textarea hua to ek sizeable area ayega 
        else
            input = document.createElement('input')
//nhi to as usual jo input select kiya he wese aayega 
        labelInput.innerHTML = label
        // jo label me type karunga 
        input.type = type
        //ye jo user type select kiya he us type ka text magenga jese sgar date select kiya date ka input format aa jayega
        input.classList.add('form-control')
        labelInput.classList.add("form-label")
        div.classList.add("mb-3")


        if (type != 'submit') {
            div.appendChild(labelInput)
        }

        if (type == 'submit') {
            input.classList.add("btn")
            input.classList.add("btn-success")
            input.value = label
        }

        div.appendChild(input)

        form.appendChild(div)
    }
})
