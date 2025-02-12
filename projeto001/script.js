const but1 = document.querySelector("#btn1");
const but2 = document.querySelector("#btn2");
const but3 = document.querySelector("#btn3");
const extra = document.querySelector("#extra");
const extra2 = document.querySelector("#extra2");
const extra3 = document.querySelector("#extra3")
const text1 = document.querySelector(".txt1");
const text2 = document.querySelector(".txt2");
const  text3 = document.querySelector(".txt3");
const mediaQery = window.matchMedia("(min-width:768px)");

but1.addEventListener("click", ()=>  {
        but1.setAttribute("style", "display:none;")
        extra.setAttribute("style", "display: block;")
        text1.setAttribute("style", "margin-bottom:40px;")

        setTimeout(() => {
            but1.setAttribute("style", "display:inline-block;")
            extra.setAttribute("style","display: none;")
            text1.setAttribute("style", "margin-bottom:83px;")
        }, 10000);
    });

but2.addEventListener("click", ()=>{
        but2.setAttribute("style", "display:none;")
        extra2.setAttribute("style", "display:block;")
        text2.setAttribute("style", "margin-bottom:30px")

       setTimeout(() => {
            but2.setAttribute("style", "display:inline-block;") 
            extra2.setAttribute("style", "display:none;") 
            text2.setAttribute("style", "margin-bottom:73px")   
        }, 10000);

    
})

but3.addEventListener("click", () =>{
    
    
    but3.setAttribute("style", "display:none;")
    extra3.setAttribute("style", "display:block;")
    text3.setAttribute("style","margin-bottom:50px;")
    

    setTimeout(() => {
        but3.setAttribute("style", "display:inline-block;")
        extra3.setAttribute("style","diplay:none;")
        text3.setAttribute("style","margin-bottom:100px")
    }, 10000);
})




