const wrapFormElement = document.querySelector(".content .wrap-form");
const btnFormElement = document.querySelector(".content .wrap-form button");
const emailInputElement =  document.querySelector(".content .wrap-form input");
const erroElement = document.querySelector(".content form span");
const iconErroElement = document.querySelector("#icon-error");
const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

btnFormElement.addEventListener("click", (event) => {
    event.preventDefault();
    if(!regex.test(emailInputElement.value)){
        iconErroElement.classList.add("error");
        erroElement.classList.add("error");
        wrapFormElement.classList.add("error");
    }else {
        erroElement.classList.remove("error");
        wrapFormElement.classList.remove("error");
        iconErroElement.classList.remove("error")
    }
})