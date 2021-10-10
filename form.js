// DOM Elements

const contactForm = document.querySelector("#contact-form")
const lname = document.querySelector("#lname")
const fname = document.querySelector("#fname")
const phone = document.querySelector("#phone")
const email = document.querySelector("#email")
const nameField = document.querySelector("input")
const message = document.querySelector("#message")

//modal Elements
const modal = document.querySelector(".modal")
const body = document.querySelector("body")
const modalOverlay = document.querySelector(".modal-overlay")
const closeModalButton = document.querySelector("#close-modal")

//REGEX
const lnameRegex = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/ 

const fnameRegex = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/ 

const phoneRegex = /(\(\+33\)|0|\+33|0033)[1-9]([0-9]{8}|([0-9\- ]){12})/g
/* french format 
0633107246
06 33 10 72 46 
06-33-10-72-46 
(+33)633107246
+33633107246 
*/

const emailRegex =  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

const messageRegex = /^[^<>]+$/

contactForm.setAttribute("novalidate", true)
contactForm.addEventListener("submit", validateForm)
closeModalButton.addEventListener("click",closeModal)




function validateForm(e){
 e.preventDefault()
 
 /*validate each input*/
 if (isValid(lname, lnameRegex) && isValid(fname, fnameRegex) && isValid(phone, phoneRegex) && isValid(email, emailRegex) && isValid(message, messageRegex))
 {
     console.log("Valid Form")
     openModal()
     contactForm.reset()
   }  
   else {
         console.log("Not Valid")
     }
 }
  
 function isValid(element, regex){
  return regex.test(element.value)

}
function openModal(){

  modal.classList.add("active")
  body.classList.add("modal-open")
  modalOverlay.classList.add("active")

}



function closeModal(){
  modal.classList.remove("active")
  body.classList.remove("modal-open")
  modalOverlay.classList.remove("active")

}






nameField.addEventListener("input", () => {
  nameField.setCustomValidity("");
  nameField.checkValidity();
  console.log(nameField.checkValidity());
});

nameField.addEventListener("invalid", () => {
  nameField.setCustomValidity("Please fill in proper data.");
});