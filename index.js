const submit_button = document.getElementById('form_submit')
const input_forms = document.getElementById('div_form').children
// for (a of input_forms) {
//     console.log(a)
// }

const form_submit = document.getElementById('submission_form')




const clickButton = (e) => {

    e.target.style.transform = 'translateY(2px)'
    const timer = setTimeout(()=>{
        
        e.target.style.transform ='translateY(0px)'
    },100)
  

}
const form_submited = (e)=>{
    e.preventDefault()
    const elementList = e.target.elements 
    
    for (elm of elementList) {

        if (elm.id=='form_submit') {
            continue
        }
        else {
            if (!(elm.validity.valid)) {
                console.log("satu")
                elm.style.backgroundImage = "url('images/icon-error.svg')";
                elm.style.backgroundSize = "8%";
                elm.style.backgroundPosition = "right";
                elm.style.backgroundRepeat = "no-repeat";
                if (elm.validity.valueMissing) {
                    elm.labels[0].innerHTML = `${elm.placeholder} cannot be empty`;
                }
                else if ((elm.id=='email')&&(elm.validity.typeMismatch)) {
                    elm.labels[0].innerHTML = `looks like this is not an email `
                    elm.style.color = "var(--red)"
                }
                else {
                    elm.labels[0].innerHTML = "General Error >.<"
                    
                }
                
                   
        }
            else {
                console.log("dua")
                elm.labels[0].innerHTML = ""
                elm.style.backgroundImage = ""
                elm.style.color = ""
            }
             
    } 

        }
      
          
}

const inputData = (e) => {
   e.target.style.color = ""
}



form_submit.addEventListener('submit',form_submited)
submit_button.addEventListener('click',clickButton)
form_submit.addEventListener('input',inputData)