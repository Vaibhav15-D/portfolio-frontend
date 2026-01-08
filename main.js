const API="http://127.0.0.1:8000";
const text="I Am Into Software Development | AI | Data Science";
let i=0;
setInterval(()=>{document.querySelector(".typing").innerText=text.slice(0,i++);if(i>text.length)i=0;},100);

async function send(){
  const body={
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    profession: document.getElementById("profession").value,
    purpose: document.getElementById("purpose").value,
    message: document.getElementById("msg").value
  };

  await fetch("http://127.0.0.1:8000/contact",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(body)
  });

  alert("Message Sent Successfully!");
}


function openProject(t){
 projectModal.style.display="block";
 if(t=="library"){projectTitle.innerText="Library System";projectDesc.innerText="Backend management system";projectTech.innerText="Python, FastAPI, PostgreSQL";}
 if(t=="portfolio"){projectTitle.innerText="Portfolio Website";projectDesc.innerText="Full stack personal website";projectTech.innerText="HTML, CSS, JS, FastAPI";}
 if(t=="powerbi"){projectTitle.innerText="Business Dashboard";projectDesc.innerText="Business analytics dashboard";projectTech.innerText="Power BI";}
}
function closeProject(){projectModal.style.display="none";}

function openCourse(t){
 courseModal.style.display="block";
 if(t=="python"){courseTitle.innerText="Python";courseVideo.src="https://www.youtube.com/embed/rfscVS0vtbw";}
 if(t=="sql"){courseTitle.innerText="SQL";courseVideo.src="https://www.youtube.com/embed/HXV3zeQKqGY";}
 if(t=="powerbi"){courseTitle.innerText="Power BI";courseVideo.src="https://www.youtube.com/embed/AGrl-H87pRU";}
}
function closeCourse(){courseModal.style.display="none";courseVideo.src="";}

function toggleMenu(){menu.classList.toggle("show");}
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(sec=>{
    const top = window.scrollY;
    if(top >= sec.offsetTop - 100){
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(a=>{
    a.classList.remove("active");
    if(a.getAttribute("href") == "#"+current){
      a.classList.add("active");
    }
  });
});

