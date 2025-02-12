const but = document.querySelectorAll("#btn1, #btn2, #btn3");
const extra = document.querySelector("#extra")
const text1 = document.querySelector(".txt1")

but.forEach (el =>{
    el.addEventListener("click", ()=> {
        el.setAttribute("style", "display:none;")
        extra.setAttribute("style", "display: block;")
        text1.setAttribute("style", "margin-bottom:40px;")

        setTimeout(() => {
            el.setAttribute("style", "display:inline-block;")
            extra.setAttribute("style","display: none;")
            text1.setAttribute("style", "margin-bottom:83px;")
        }, 10000);
    })
});





