// define the options of size, color, and usefulness
let size = document.querySelector("#size");
let color = document.querySelector("#color");
let usefulness = document.querySelector("#usefulness");

// define the ellipses
let firstEllipse = document.querySelector(".ellipse1");
let secondEllipse = document.querySelector(".ellipse2");
let thirdEllipse = document.querySelector(".ellipse3");

// when mouse over each options, animation of drawing ellipse starts
size.addEventListener("mouseover", function(){
    firstEllipse.classList.add("animate-ellipse1");
})
color.addEventListener("mouseover", function(){
    secondEllipse.classList.add("animate-ellipse2");
})
usefulness.addEventListener("mouseover", function(){
    thirdEllipse.classList.add("animate-ellipse3");
})
// mouse out, remove the animation
size.addEventListener("mouseout", function(){
    firstEllipse.classList.remove("animate-ellipse1");
})
color.addEventListener("mouseout", function(){
    secondEllipse.classList.remove("animate-ellipse2");
})
usefulness.addEventListener("mouseout", function(){
    thirdEllipse.classList.remove("animate-ellipse3");
})
