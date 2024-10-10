let con =   document.querySelector(".con");

for(let i = 1; i <= 1500; i++){
    let box  = document.createElement("div");
    con.appendChild(box)
    box.classList.add("box")
}