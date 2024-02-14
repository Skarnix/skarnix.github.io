var typed = new Typed(".multiple-text", {
    strings: ["Data Analyst", "Customer Support Executive", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

function scrollToAbout() {
    event.preventDefault(); 
    document.getElementById('about').scrollIntoView({behavior: 'smooth'});
    document.querySelector('.about-content').classList.add('active');
}

function scrollToSkills() {
    event.preventDefault(); 
    document.getElementById('Skills').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.skills-content').classList.add('active');
}


function scrollToHome() {
    document.getElementById('Home').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.Home').classList.add('active');
}


function scrollToProjects() {
    event.preventDefault(); 
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.projects-content').classList.add('active');
}


function scrollToContact() {
    event.preventDefault(); 
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.container').classList.add('active');
}

const inputs=document.querySelectorAll(".contact-input");


inputs.forEach(ipt => {
    ipt.addEventListener("focus",() =>{
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur",() =>{
        if(ipt.value=="") {
        ipt.parentNode.classList.remove("not-empty");
        }
        ipt.parentNode.classList.remove("focus");
    });
});