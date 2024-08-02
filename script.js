// Dom Element
let boxes = document.querySelectorAll(".box");
let image = document.querySelector(".image");

// Loop through each boxes element
boxes.forEach(function(box){
    box.addEventListener("dragover",function(e){
        e.preventDefault();
        box.classList.add("hovered")
    })
    box.addEventListener("dragleave",function(){
        box.classList.remove("hovered")
    })
    box.addEventListener("drop",function(){
        box.appendChild(image)
        box.classList.remove("hovered")
    })
})