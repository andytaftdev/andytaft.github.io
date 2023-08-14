const navBar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const title = document.querySelector(".title");
const op = document.querySelector(".op");
const bar1 = document.querySelector(".barrier1");
const bar2 = document.querySelector(".barrier2");
const body = document.querySelector(".body1");
const hover = document.querySelector(".display:hover .hover");
const about = document.querySelector(".con-about");
const me = document.querySelector(".con-me");


window.addEventListener('pageshow', (event) => {
  const homeSection = document.getElementById('home');
  
  if (about) {
    homeSection.scrollIntoView({ behavior: 'smooth' });
  }
});

setTimeout(() => {
  op.classList.toggle("non-active",);
  bar1.classList.toggle("gone");
  bar2.classList.toggle("gone");
  body.classList.toggle("active");


 

 }, 2850);

 window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 300;
  about.classList.toggle("active", windowPosition);
  me.classList.toggle("active", windowPosition);

});

document.addEventListener("mousemove", (e) => {
  let x = e.pageX + -50;
  let y = e.pageY + -50;
  
  const hover = document.querySelector(".display:hover .hover")

  hover.style.top = y + "px" ;
  hover.style.left = x + "px" ;

});

