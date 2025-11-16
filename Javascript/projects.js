
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
  

    window.addEventListener('load', function () {

      const preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
    
        
    
    
    });
    
const wrapper = document.querySelector(".wrapper");

projects.item.forEach(user => {

    // 1. Insert project card
    wrapper.innerHTML += `
        <div class="my_projects">
            <div id="imageCountainer">
                <img src="${user.img}" id="projectImage" alt="">
            </div>

            <div class="about_project">
                <h1>${user.name}</h1>
                <p id="project_details">${user.about}</p>

                <div class="tech-used"></div>
            </div>

            <a href="${user.link}" id="viewButton">View project</a>
        </div>`;
});


// 2. Now add tech tags to each project card
const projectCards = document.querySelectorAll(".my_projects");

projectCards.forEach((card, index) => {
    const techContainer = card.querySelector(".tech-used");

    projects.item[index].tech.forEach(tech => {
        techContainer.innerHTML += `<span class="tag">${tech}</span>`;
    });
});





 
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
