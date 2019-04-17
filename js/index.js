// Your code goes here
const headNav = document.querySelector(".nav");
headNav.addEventListener("click", event => {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'hotpink';
});
const titleColor = document.querySelector("h1");
titleColor.addEventListener("mouseover", event => {
    event.target.style.color = 'hotpink';
});
const titleWhite = document.querySelector("h1");
titleWhite.addEventListener("click", event => {
    event.target.style.color = 'white';
});
const titleBlack = document.querySelector("h1");
titleBlack.addEventListener("dblclick", event => {
    event.target.style.color = 'black';
})
const headLine = document.querySelector("h2");
headLine.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = 'darkgray';
    event.target.style.color = 'purple';
});
const introDuce = document.querySelector(".intro");
introDuce.addEventListener("dblclick", event => {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'hotpink';
});
const destColor = document.querySelector(".content-pick");
destColor.addEventListener("click", event => {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'purple'
    event.target.style.textalign = "center";
});
const dColor = document.querySelector(".content-pick");
dColor.addEventListener("dblclick", event => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
});
const footerBlack = document.querySelector("footer");
footerBlack.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = 'black';
});
const footerPink = document.querySelector("footer");
footerPink.addEventListener("click", event => {
    event.target.style.backgroundColor = 'hotpink';
    event.target.style.color = 'white';
});
const footerReturn = document.querySelector("footer");
footerReturn.addEventListener("dblclick", event => {
    event.target.style.backgroundColor = '#FFEBCD';
    event.target.style.color = 'black';
});