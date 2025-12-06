
const projects={
    item:[{img:"../images/JoySync.png",name:"Social media Plaform(JoySync)", about:"A social media platform with authentication and good UI/UX",link:'https://jigyasa-y.github.io/socialmedia-platform/',tech:["HTML5","CSS3","javaScript","MONGODB","NodeJs","ExpressJS","Cloudinary"]}
      ,
      {
        img:"../images/Flow-Chat.png",name:"Real-time Chat app(Flow Talk)",about:"A simple messaging app made of HTML5,CSS3,NODE.js,Express.js and MONGODB",link:'https://jigyasa-y.github.io/chat-app/src/pages/chatPage.html',tech:["HTML5","CSS3","javaScript","MONGODB","NodeJs","ExpressJS","Cloudinary"]
      } ,
      {
        img:"../images/clinicWebsite.png",name:"Clinic website",about:"An static hospital management system and clinic website",link:'https://jigyasa-y.github.io/clinic-website/',tech:["HTML5","CSS3","javaScript"]
      }
    ]
      
    };
  

    window.addEventListener('load', async function () {

      const preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
try{
const response=await axios.get("http://localhost:5000/api/response/projects");
console.log(response.data.project);
response.data.project.forEach(pr => {

    // 1. Insert project card
    wrapper.innerHTML += `
        <div class="my_projects">
            <div id="imageCountainer">
                <img src="${pr.image}" id="projectImage" alt="">
            </div>

            <div class="about_project">
                <h1>${pr.name}</h1>
                <p id="project_details">${pr.about}</p>

                <div class="tech-used"></div>
            </div>

            <a href="${pr.url}" id="viewButton">View project</a>
        </div>`;
});
const projectCards = document.querySelectorAll(".my_projects");

projectCards.forEach((card, index) => {
    const techContainer = card.querySelector(".tech-used");

    response.data.project[index].techs.forEach(tech => {
        techContainer.innerHTML += `<span class="tag">${tech}</span>`;
    });
});



}
catch(error){
  console.log("error in message",error.message);
}






      
    
    });
    
const wrapper = document.querySelector(".wrapper");




// 2. Now add tech tags to each project card





 
const open=document.querySelector('#navList');
const close=document.querySelector('#close_image');
const navigation =document.querySelector(".navigators");
let isDisplay=false;
  open.addEventListener('click',(e)=>{
    e.stopPropagation();
 navigation.classList.toggle('pop_up');
 open.classList.toggle('shift');
 open.classList.toggle('open_image');
  
  })

  document.addEventListener('click',()=>{
    if(navigation.classList.contains('pop_up')){
      navigation.classList.remove('pop_up');
      open.classList.remove('shift');
      open.classList.add('open_image');
      
    }
  })
