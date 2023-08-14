const title = document.querySelector(".title1");
const card = document.querySelector(".container1");
const about = document.getElementById('1');
const skill = document.getElementById('2');
const exp = document.getElementById('3');



window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 100;
    title.classList.toggle("active", windowPosition);
    card.classList.toggle("active", windowPosition);
    
  
  });

  about.addEventListener("click", () => {
    console.log(window.scrollY);
    about.classList.toggle("active-about");
  });
  skill.addEventListener("click", () => {
    console.log(window.scrollY);
    about.classList.toggle("active-skill");
  });
  exp.addEventListener("click", () => {
    console.log(window.scrollY);
    about.classList.toggle("active-exp");
  });