let box = document.querySelectorAll("#box");

let btn = document.querySelectorAll(".btn");

btn.forEach(btn => {
    btn.addEventListener("click",()=>{
        console.log("i am clicked");
        btn.classList.toggle("bg");
    });
});



