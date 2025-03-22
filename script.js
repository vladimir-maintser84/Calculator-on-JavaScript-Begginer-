document.addEventListener("DOMContentLoaded", () => {

    let display = document.querySelector(".input");
    
    let buttons = Array.from(document.querySelectorAll("button"));
    
    buttons.map((button) => {
        button.addEventListener("click" , (event) => {
            switch(event.target.innerHTML) {
                case "AC":
                    display.textContent = "0";
                    break;
                case "=":
                    display.textContent = eval(display.innerHTML);
                    break;
                default:
                    if(display.textContent === "0" && event.target.innerHTML !== ".") {
                        display.textContent = event.target.innerHTML;
                    }
                    else {
                        display.textContent += event.target.innerHTML;
                    }
            }
        })
    })
});
