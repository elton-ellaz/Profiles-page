const profilePic = document.getElementById("profile-pic");
const nameElement = document.getElementById("name");
const titleElement = document.getElementById("title");
const bioElement = document.getElementById("bio");
const langElement = document.getElementById("lang");
const manageElement = document.getElementById("manage");
const commuElement = document.getElementById("commu");
const emailElement = document.getElementById("email");

const profileData = {
    picture : "images/etty.jpg",
    name: "Elton S.",
    title: "Intermediate Developer",
    bio: "l'm a developer experienced in building websites and mobile application for small and medium-sized business.",
    lang: "Proficient in HTML, CSS, PHP, WordPress, SEO, Flutter, and JavaScript.",
    manage: "l have Mastered these skills which provides me a solid foundation for web development, enabling the creation of responsive, dynamic, and user-friendly applications while maintaining a strong focus on performance.",
    email: "simbaburelton@gmail.com",
    commu: "Regular communication is important to me, so let's keep in touch",
    
}

document.getElementById("btn").addEventListener("click", copyEmail);
function copyEmail(){
    email = document.getElementById("email").innerHTML;

    navigator.clipboard.writeText(profileData.email);
    alert("Email copied");
}

profilePic.src = profileData.picture;
nameElement.textContent = profileData.name;
titleElement.textContent = profileData.title;
bioElement.textContent = profileData.bio;
langElement.textContent = profileData.lang;
manageElement.textContent = profileData.manage;
commuElement.textContent = profileData.commu;
emailElement.innerHTML = `<a href="mailto:${profileData.email}">${profileData.email}</a>`;

