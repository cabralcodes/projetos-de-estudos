const but1 = document.querySelector("#btn1");
const but2 = document.querySelector("#btn2");
const but3 = document.querySelector("#btn3");
const extra = document.querySelector("#extra");
const extra2 = document.querySelector("#extra2");
const extra3 = document.querySelector("#extra3")
const text1 = document.querySelector(".txt1");
const text2 = document.querySelector(".txt2");
const  text3 = document.querySelector(".txt3");
const texto = document.querySelector(".texto");


but1.addEventListener("click", ()=>  {
        but1.setAttribute("style", "display:none;")
        extra.setAttribute("style", "display: block;")
        

        setTimeout(() => {
            but1.setAttribute("style", "display:inline-block;")
            extra.setAttribute("style","display: none;")
            
            
        }, 10000);
    });

but2.addEventListener("click", ()=>{
        but2.setAttribute("style", "display:none;")
        extra2.setAttribute("style", "display:block;")

        setTimeout(() => {
            but2.setAttribute("style", "display:inline-block;") 
            extra2.setAttribute("style", "display:none;") 
            
        }, 10000);

    
});

but3.addEventListener("click", () =>{
    but3.setAttribute("style", "display:none;")
    extra3.setAttribute("style", "display:block;")

    

    setTimeout(() => {
        but3.setAttribute("style", "display:inline-block;")
       extra3.setAttribute("style","diplay:none;")
       
    }, 10000);

})



